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

//Below commented function To be built soon!

// exports.AddData = async function add_data(JSONDataObject,CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
//     const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 

//     const sshid = shid.replaceAll("-","")
//     const key = sshid
 
    

//     //process the CAT for UAK
//     const strucat = String(CATOKEN)
//     const decrypted = CryptoJS.AES.decrypt(strucat, key); 
//     const decres = decrypted.toString(CryptoJS.enc.Utf8) 
//     // console.log(decres)
//     const uak = String(decres.substring(0,36)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
//     const uakk = uak 
     
//     //converting the passed relations object as a string
//     const RelationsObj = JSON.stringify(UserRelationsObject)
    
//     return new Promise((resolve,reject) => {
//         db.get(uakk).put({
        
//             RelationsObj //relations are stored as a string
    
//         })
//         db.get(uakk).once(v =>{
//             const res = v
//             if (res === ''){
//                 reject(new Error("Failed to add the user relations since user doesnt exist!"))
//             }

//             else{
                
//                 const Jsobject = "Added passed user relations"
//                 resolve(Jsobject)
//             }

//         })

//     })}

exports.AddUserRelations = async function user_relations(UserRelationsObject,CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
    const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 

    const sshid = shid.replaceAll("-","")
    const key = sshid
 
    

    //process the CAT for UAK
    const strucat = String(CATOKEN)
    const decrypted = CryptoJS.AES.decrypt(strucat, key); 
    const decres = decrypted.toString(CryptoJS.enc.Utf8) 
    // console.log(decres)
    const uak = String(decres.substring(0,36)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
    const uakk = uak 
     
    //converting the passed relations object as a string
    const RelationsObj = JSON.stringify(UserRelationsObject)
    
    return new Promise((resolve,reject) => {

        db.get(uakk).once(v =>{
            const res = v
            if (res === "" || res.username === null){
                reject(new Error("Failed to add the user relations since user doesnt exist!"))
            }

            else{
                db.get(uakk).put({
        
                    RelationsObj //relations are stored as a string
            
                })
                
                const Jsobject = "Added passed user relations"
                resolve(Jsobject)
            }

        })

    })}



    exports.FetchUserRelations = async function user_relations_fetch(CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
        const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    
        const sshid = shid.replaceAll("-","")
        const key = sshid
     
    
        //process the CAT for UAK
        const strucat = String(CATOKEN)
        const decrypted = CryptoJS.AES.decrypt(strucat, key); 
        const decres = decrypted.toString(CryptoJS.enc.Utf8) 
        // console.log(decres)
        const uak = String(decres.substring(0,36)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
        const uakk = uak 
     
        
        return new Promise((resolve,reject) => {
            db.get(uakk).once(v =>{
                const res = v
                if (res === "" || res.username === null){
                    reject(new Error("Failed to fetch the user relations since user doesnt exist!"))
                }
    
                else{
                    
                    const dataobject = JSON.parse(v.RelationsObj)
                    resolve(dataobject)
                }
    
            })
    
        })}



exports.DeleteUser = async function DeleteUser(CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
            //process the UUID for Key
            const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 
        
            const sshid = shid.replaceAll("-","")
            const key = sshid
        
        
            //process the CAT for UAK
            const strucat = String(CATOKEN)
            const decrypted = CryptoJS.AES.decrypt(strucat, key); 
            const decres = decrypted.toString(CryptoJS.enc.Utf8) 
            // console.log(decres)
            const uak = String(decres.substring(0,36)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
            const uakk = uak 
            // console.log("Loginuak: " + uakk)
            //put in the uak to retrieve credentials
            return new Promise((resolve,reject) => {
                db.get(uakk).put({
        
                    username: null,
                    password: null,
                    mail: null,
            
                })
                db.get(uakk).once(v=>{
                    if(v === "" || v.username === null)
                    resolve("User Deleted successfully!")

                    else{
                        resolve("failed to delete user")
                    }
                })
                    
            })
         
        }



exports.LoginUser = async function LogUser(CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
    //process the UUID for Key
    const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 

    const sshid = shid.replaceAll("-","")
    const key = sshid


    //process the CAT for UAK
    const strucat = String(CATOKEN)
    const decrypted = CryptoJS.AES.decrypt(strucat, key); 
    const decres = decrypted.toString(CryptoJS.enc.Utf8) 
    // console.log(decres)
    const uak = String(decres.substring(0,36)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
    const uakk = uak 
    // console.log("Loginuak: " + uakk)
    //put in the uak to retrieve credentials
    return new Promise((resolve,reject) => {
        db.get(uakk).once(v =>{
            // console.log(v)
            var res = v
            console.log(res.username)
            if (res === "" || res.username === null){
                // reject(new Error("Failed to find a registered user"))
                const Jsobject = {isLogged: "False"}
                // console.log(Jsobject)
                resolve(Jsobject)
            }
            else{
                const Jsobject = {isLogged: "True",LoggedinAs:v.username,userObject:v}
                resolve(Jsobject)
            }
        })


    })

 
}

exports.MigrateUser = async function MigrateUser(MDT,URK){

    var decrypted = CryptoJS.AES.decrypt(MDT, URK); 
    var miguak = decrypted.toString(CryptoJS.enc.Utf8)
    // console.log("Encryption: "+ miguak) 

    return new Promise((resolve,reject) => {
        db.get(miguak).once(v =>{
            // console.log(v)
            var res = v
            if (res === "" || res.username === null){
                reject(new Error("Failed to find a logged in"))
                const Jsobject = {isLogged: "False"}
                // console.log(Jsobject)
                resolve(Jsobject)
            }
            else{
                const Jsobject = {isLogged: "True",LoggedinAs:v.username,userObject:v}
                resolve(Jsobject)
            }
        })


    })
}








exports.UpdateUserName = async function UpdateUsername(UpdateUserName,CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
    //process the UUID for Key
    const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 

    const sshid = shid.replaceAll("-","")
    const key = sshid
 

    //process the CAT for UAK
    const strucat = String(CATOKEN)
    const decrypted = CryptoJS.AES.decrypt(strucat, key); 
    const decres = decrypted.toString(CryptoJS.enc.Utf8) 
    // console.log(decres)
    const uak = String(decres.substring(0,36)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
    const uakk = uak 
 
    
    return new Promise((resolve,reject) => {
    
        db.get(uakk).once(v =>{
            const res = v
            if (res === "" || res.username === null){
                reject(new Error("Failed to update the username,since no document exists"))
            }

            else{
                db.get(uakk).put({
        
                    username: UpdateUserName
            
                })
                
                const Jsobject = "username updated"
                resolve(Jsobject)
            }

        })

    })


    
}

exports.UpdateMail = async function UpdateMail(UpdateMail,CATOKEN,UEID,CUTUUIDFROM,CUTUUIDTO){
    //process the UUID for Key
    const shid = String(UEID.substring(CUTUUIDFROM,CUTUUIDTO)) 

    const sshid = shid.replaceAll("-","")
    const key = sshid
 

    //process the CAT for UAK
    const strucat = String(CATOKEN)
    const decrypted = CryptoJS.AES.decrypt(strucat, key); 
    const decres = decrypted.toString(CryptoJS.enc.Utf8) 
    // console.log(decres)
    const uak = String(decres.substring(0,36)) //Shouldnt be changed since its length is 0-36 and this line will retrieve it in a clean manner from CAT
    const uakk = uak 
 
    
    return new Promise((resolve,reject) => {
        db.get(uakk).once(v =>{
            const res = v
            if (res === "" || res.username === null){
                reject(new Error("Failed to update the mail,since no document exists"))
            }

            else{
                db.get(uakk).put({
        
                    mail: UpdateMail
            
                })
                
                const Jsobject = "mail updated"
                resolve(Jsobject)
            }

        })

    })


    
}

async function CreateRecoveryDoc(u,userN,encat,urk,mdt){
    const USEKEY = userN
    const ENCAT = encat
    u[USEKEY] = ENCAT
    const data = await db.get(ENCAT).put({
        u
    });
    return new Promise( (resolve,reject) => {
        db.get(urk).once(v =>{
            const res = v
            if (res === ''){
                reject(new Error("Failed to create a recovery doc"))
            }
            else{
                 db.get(UserUAK).once(D =>{
                    const Jsobject = {CAT:encat,URK:urk,MDT:mdt,isRecoveryDoc:"True",userObject:D}
                    // console.log(Jsobject)
                    resolve( Jsobject)
                    
                })
               
            }
        })
    });
}





exports.RegisterUser = async function RegisterUser(user,pass,email,HID,CUTUUIDFROM,CUTUUIDTO,RECSECRET){
    var userN = user //giving username to userN variable

    //create a unique user data access key(UAK)
    UserUAK = uuidv4()
    // console.log("UAK: " + UserUAK)
    
    //slicing UUID
    const EIDD = String(HID.substring(CUTUUIDFROM,CUTUUIDTO)) //UUID part slicing to be determined by developer using it.
    const ED = EIDD.replaceAll("-","") 
    // console.log("EID: "+ ED)

    //create a CAT for user and concatenate UAK into CAT //could be improved in future
    const CATTOKEN = uuidv4()
    const CAT = UserUAK + CATTOKEN
    // console.log("CAT: " + CAT)

    //encrypt the cat and send it ahead instead of sending plain cat
    const EDDfraze = ED
    var encrypted = CryptoJS.AES.encrypt(CAT, EDDfraze);  //encryption
    // console.log("Encryption: "+ encrypted.toString())
    // console.log(CUTUUIDFROM)
    // console.log(CUTUUIDTO) 
    const encat = encrypted.toString()
    // var decrypted = CryptoJS.AES.decrypt(encrypted, key); //decryption
    //console.log("Encryption: "+ decrypted.toString(CryptoJS.enc.Utf8)) //to view decrypted

    
    //put user cred into a file with UAK as its access hash
    const cred = await db.get(UserUAK).put({
        username: user,
        password: pass,
        mail: email
    })
    const checkcred = await db.get(UserUAK).once(v =>{
        U_res = v
        if (U_res === ''){
            console.log("Failed to create a User")
        }
        else{
            console.log("user created")
            // console.log("XD")
        } 

    })
    
    // const noderesult1 = db.get(UserUAK).once(v =>console.log(v.username))
    //put username as KEY and CAT as value into a file with URK as its access hash
    //create a default key-value first since we cannot put real data in null files
    //create a unique recovery doc access key of user(URK)
    const URK = uuidv4() + RECSECRET //generate unique URK for every user
    // console.log("URK: " + URK)

    //Creation of MDT[MultiDeviceToken]
    var MDT = CryptoJS.AES.encrypt(UserUAK, URK);
    var ENCMDT = MDT.toString()
    //console.log(ENCMDT)

    const defdata = await db.get(URK).put({
        default: 'defaultID'
    })
  
    return new Promise( resolve => 
        db.get(URK).once(
           u => resolve( CreateRecoveryDoc(u,userN,encat,URK,ENCMDT))
           
        )
     );
    //passed retrieved document from created recovery document above to append username as key and encrypted cat to it as a key-value pair and passed URK so it could be accessed by that specific key
};

 


//register logic
// app.post('/register',async(req,res)=>{
//     const {email,username,password,HID} = req.body
//     console.log(email)
//     console.log(username)
//     console.log(password) 
//     RegisterUser(username,password,email,HID)
//      // passed user credentials along with sliced UUID[EID1] to the function to process the data and put it in GunJS Network                    
//  })


// //login logic
// app.post('/login',async(res,req)=>{
//     const {CATOKEN,UEID} = req.body //take CAT nd UUID from frontend login
//     LogUser(CATOKEN,UEID)
    
// })



// app.listen(process.env.PORT, ()=>{
//     console.log("Running on: http://localhost:" + process.env.PORT)
// });


