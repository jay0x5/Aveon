//This is the Initial code i wrote while i was developing this concept, it includes a login and register function
//My apologies for not having a super clean code, i am working on it, if you have doubts then please contact me :D
//You can ignore commented code just like she ignores me :")

const express = require('express')
const dotenv = require('dotenv');
const {v4: uuidv4} = require("uuid")
const db = require('gun')();
const CryptoJS = require("crypto-js");


app = express();
dotenv.config({path: './.env'})
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


exports.Loginuser = async function LogUser(CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
    //process the UUID for Key
    //rebuild this function tomorrow
    const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    console.log(CUTUUIDFROM)
    console.log(CUTUUIDTO)
    const sshid = shid.replaceAll("-","")
    const key = sshid
    console.log("LoginKey: " + key)
    console.log("LoginCAT: " + CATOKEN)

    //process the CAT for UAK
    const strucat = String(CATOKEN)
    const decrypted = CryptoJS.AES.decrypt(strucat, key); 
    const decres = decrypted.toString(CryptoJS.enc.Utf8) 
    console.log(decres)
    const uak = String(decres.substring(process.env.cutUak,process.env.toUak)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
    const uakk = uak 
    console.log("Loginuak: " + uakk)
    //put in the uak to retrieve credentials
    const logresult = db.get(uakk).once(v =>{
        const unamee = v.username
        console.log(v)
        console.log("Logged in as: " + unamee)


    })
}

async function CreateRecoveryDoc(u,userN,encat,urk){
    const USEKEY = userN
    const ENCAT = encat
    u[USEKEY] = ENCAT
    const data = db.get(ENCAT).put({
        u
    });
    const noderesult = await db.get(urk).once(v =>{
        const res = v
        if (res === ''){
            console.log("Failed to create a recovery doc")
        }
        else{
            console.log("recovery doc created")
            const Jsobject = {CAT:encat,URK:urk}
            // console.log(Jsobject)
            return Jsobject
        }
    
    });
}

exports.RegisterUser = async function RegisterUser(user,pass,email,HID,CUTUUIDFROM,CUTUUIDTO,RECSECRET){
    var userN = user //giving username to userN variable

    //create a unique user data access key(UAK)
    UserUAK = uuidv4()
    console.log("UAK: " + UserUAK)
    
    //slicing UUID
    const EIDD = String(HID.substring(CUTUUIDFROM,CUTUUIDTO))
    console.log(process.env.cutfrom)
    console.log(process.env.to)
    const ED = EIDD.replaceAll("-","") 
    console.log("EID: "+ ED)

    //create a CAT for user and concatenate UAK into CAT //could be improved in future
    const CATTOKEN = uuidv4()
    const CAT = UserUAK + CATTOKEN
    console.log("CAT: " + CAT)
    //encrypt the cat and send it ahead instead of sending plain cat
    const EDDfraze = ED
    var encrypted = CryptoJS.AES.encrypt(CAT, EDDfraze);  //encryption
    console.log("Encryption: "+ encrypted.toString())
    console.log(CUTUUIDFROM)
    console.log(CUTUUIDTO) 
    const encat = encrypted.toString()
    // var decrypted = CryptoJS.AES.decrypt(encrypted, key); //decryption
    //console.log("Encryption: "+ decrypted.toString(CryptoJS.enc.Utf8)) //to view decrypted

    
    //put user cred into a file with UAK as its access hash
    const cred = await db.get(UserUAK).put({
        username: user,
        password: pass
    })
    const checkcred = await db.get(UserUAK).once(v =>{
        U_res = v
        if (U_res === ''){
            console.log("Failed to create a User")
        }
        else{
            console.log("Usercreated")
        } 

    })
    
    // const noderesult1 = db.get(UserUAK).once(v =>console.log(v.username))
    //put username as KEY and CAT as value into a file with URK as its access hash
    //create a default key-value first since we cannot put real data in null files
    //create a unique recovery doc access key of user(URK)
    const URK = uuidv4() + RECSECRET //generate unique URK for every user
    console.log("URK: " + URK)
    const defdata = await db.get(URK).put({
        default: 'defaultID'
    })
    const data = await db.get(URK).once(v =>{
        var u = v //retrieve current state of document and give it to variable u
        // console.log(u)
        CreateRecoveryDoc(u,userN,encat,URK) 
    //passed retrieved document from created recovery document above to append username as key and encrypted cat to it as a key-value pair and passed URK so it could be accessed by that specific key
});

}

//register logic
app.post('/register',async(req,res)=>{
    const {email,username,password,HID} = req.body
    console.log(email)
    console.log(username)
    console.log(password) 
    RegisterUser(username,password,email,HID)
     // passed user credentials along with sliced UUID[EID1] to the function to process the data and put it in GunJS Network                    
 })


//login logic
app.post('/login',async(res,req)=>{
    const {CATOKEN,UEID} = req.body //take CAT nd UUID from frontend login
    LogUser(CATOKEN,UEID)
    
})


app.listen(process.env.PORT, ()=>{
    console.log("Running on: http://localhost:" + process.env.PORT)
});


