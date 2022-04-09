//We will be building the npm packaged version of system here in package folder

const express = require('express')
const dotenv = require('dotenv');
const {v4: uuidv4} = require("uuid")
const db = require('gun')();
const CryptoJS = require("crypto-js");

app = express();
dotenv.config({path: './.env'})
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

async function CreateRecoveryDoc(u,userN,encat,urk){
    const USEKEY = userN
    const ENCAT = encat
    u[USEKEY] = ENCAT
    const data = await db.get(ENCAT).put({
        u
    });
    const noderesult = db.get(urk).once(v =>{
        const res = v
        if (res === ''){
            console.log("Failed to create a recovery doc")
        }
        else{
            console.log("recovery doc created")
            
        }
    
    });
}

exports.RegisterUser = async function RegisterUser(user,pass,email,HID){
    var userN = user //giving username to userN variable

    //create a unique user data access key(UAK)
    UserUAK = uuidv4()
    console.log("UAK: " + UserUAK)

    //slicing UUID for a part of it
    const EIDD = String(HID.substring(process.env.cutfrom,process.env.to))
    const ED = EIDD.replaceAll("-","") 
    console.log("EID: "+ ED)


    //create a CAT for user and concatenate UAK into CAT //could be improved in future
    const CATTOKEN = uuidv4()
    const CAT = UserUAK + CATTOKEN
    console.log("CAT: " + CAT)
    //encrypt the cat and send it ahead instead of sending plain cat
    const EDDfraze = ED
    var encrypted = CryptoJS.AES.encrypt(CAT, EDDfraze);  //encryption
    console.log("Encryption: "+ encrypted.toString()) //to view encrypted
    const encat = encrypted.toString()
    // var decrypted = CryptoJS.AES.decrypt(encrypted, key); //decryption
    //console.log("Encryption: "+ decrypted.toString(CryptoJS.enc.Utf8)) //to view decrypted

    
    //put user cred into a file with UAK as its access hash
    const cred = await db.get(UserUAK).put({
        username: user,
        password: pass
    })
    
    
    // const noderesult1 = db.get(UserUAK).once(v =>console.log(v.username))
    //put username as KEY and CAT as value into a file with URK as its access hash
    //create a default key-value first since we cannot put real data in null files
    //create a unique recovery doc access key of user(URK)
    const URK = uuidv4() + process.env.SECRET2 //generate unique URK for every user
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
