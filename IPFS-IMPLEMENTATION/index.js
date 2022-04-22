const fs = require('fs')
const {v4: uuidv4} = require("uuid")
const CryptoJS = require("crypto-js");
const {create} = require("ipfs-http-client");
const { uuid } = require('uuidv4');


async function main() {
    const ipfs = await create(
        {
            host: 'ipfs.infura.io',
            port: '5001',
            protocol: 'https'
        }
    );
return ipfs

  }

exports.RegisterUser = async function savedata(userjsondata,UUID,CUTUUIDFROM,CUTUUIDTO,RECSECRET){
    let ipfss = await main();
    let datavar = await ipfss.add(JSON.stringify(userjsondata));

    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) //UUID part slicing to be determined by developer using it.
    const ED = EIDD.replaceAll("-","")

    const URKhalf = uuidv4()
    const URK = URKhalf + RECSECRET
    // console.log("Key: " + datavar.path)
    // console.log("URK: " + URK)
    CATMIX = String(datavar.path) + uuidv4()
    const CAT = CryptoJS.AES.encrypt(CATMIX,ED);
    var ENCAT = CAT.toString()

    

    recoverydata = JSON.stringify({[URK]:ENCAT})
    let datavarr = await ipfss.add(recoverydata);
    UserURK = String(datavarr.path) + URKhalf //this will be added with developer recsec during recovery to match the key 

    const MDT = CryptoJS.AES.encrypt(datavar.path,UserURK);
    var ENCMDT = MDT.toString()

    return new Promise((resolve,reject)=>{
        retobj = {CAT:ENCAT,URK:UserURK,MDT:ENCMDT}
        resolve(retobj)
    })
}

exports.LoginUser = async function read_data(ENCAT,UUID,CUTUUIDFROM,CUTUUIDTO){
    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    const ED = EIDD.replaceAll("-","")

    const CAT = CryptoJS.AES.decrypt(ENCAT,ED);
    var DECAT = CAT.toString(CryptoJS.enc.Utf8)
    // console.log(DECAT)
    const datahash = DECAT.substring(0,46)


    let ipfs = await main();
    let datavar = await ipfs.cat(datahash)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        return new Promise((resolve,reject)=>{
            resolve(datastr)
        })
        // console.log(datastr)
    }
}

exports.RecoverUserCAT = async function recover_cat(USERURK,RECSECRET){
    
   systemurk = USERURK.substring(0,46)
   urk = USERURK.substring(46,82)
   Uurk = urk + RECSECRET

    let ipfs = await main();
    let datavar = await ipfs.cat(systemurk)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        return new Promise((resolve,reject)=>{
            dataobj = JSON.parse(datastr)
            resolve(dataobj[Uurk])
        })
        // console.log(datastr)
    }
}

exports.UpdateUser = async function updatecredentials(credentialname,Updatedfield,ENCAT,UUID,CUTUUIDFROM,CUTUUIDTO,URK,RECSECRET){

    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    const ED = EIDD.replaceAll("-","")

    const CAT = CryptoJS.AES.decrypt(ENCAT,ED);
    var DECAT = CAT.toString(CryptoJS.enc.Utf8)
    // console.log(DECAT)
    const datahash = DECAT.substring(0,46)


    let ipfs = await main();
    let datavar = await ipfs.cat(datahash)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        dataobj = JSON.parse(datastr)
        dataobj[credentialname] = Updatedfield
        updated_dataobj = dataobj
        // console.log("updated: " + updated_dataobj)
        let updated_datavar = await ipfs.add(JSON.stringify(updated_dataobj));


        //update 1sthalf of CAT
        updated_CAT = DECAT.replace(datahash,updated_datavar.path)
        const ENCRYPT_THE_CAT = CryptoJS.AES.encrypt(updated_CAT,ED);
        var ENC_CAT = ENCRYPT_THE_CAT.toString()

        //update 1st half(IPFS hash) of URK
        user_and_dev_mixed_urk_part = URK.substring(46,82)
        User_Dev_URK = user_and_dev_mixed_urk_part + RECSECRET
        Updaterecoverydata = JSON.stringify({[User_Dev_URK]:ENC_CAT})
        let updated_datavarr = await ipfs.add(Updaterecoverydata);

        part_to_removed = URK.substring(0,46)
        // console.log(URK)
        updated_urk = URK.replace(part_to_removed,updated_datavarr.path)

        //update MDT
        const NEWMDT = CryptoJS.AES.encrypt(updated_datavar.path,updated_urk);
        var NEWENCMDT = NEWMDT.toString()

        return new Promise((resolve,reject)=>{
            newobj = {UPDATED_CAT:ENC_CAT,UPDATED_URK:updated_urk,UPDATED_MDT:NEWENCMDT}
            resolve(newobj)
        })
        // console.log(datastr)
    }

}

exports.AddUserRelations = async function adduserRelations(rel,ENCAT,UUID,CUTUUIDFROM,CUTUUIDTO,URK,RECSECRET){

    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    const ED = EIDD.replaceAll("-","")

    const CAT = CryptoJS.AES.decrypt(ENCAT,ED);
    var DECAT = CAT.toString(CryptoJS.enc.Utf8)
    // console.log(DECAT)
    const datahash = DECAT.substring(0,46)


    let ipfs = await main();
    let datavar = await ipfs.cat(datahash)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        datastr1 = datastr.replace("{","")
        datastr2 = datastr1.replace("}","")
        // console.log(datastr2)
        relstr = JSON.stringify((rel))
        rel1 = relstr.replace("{","")
        rel2 = rel1.replace("}","")
        // console.log(rel2)
        relationstr = "{" + datastr2 + "," + rel2 + "}"
        let updated_datavar = await ipfs.add(relationstr);


        //update 1sthalf of CAT
        updated_CAT = DECAT.replace(datahash,updated_datavar.path)
        const ENCRYPT_THE_CAT = CryptoJS.AES.encrypt(updated_CAT,ED);
        var ENC_CAT = ENCRYPT_THE_CAT.toString()

        //update 1st half(IPFS hash) of URK
        user_and_dev_mixed_urk_part = URK.substring(46,82)
        User_Dev_URK = user_and_dev_mixed_urk_part + RECSECRET
        Updaterecoverydata = JSON.stringify({[User_Dev_URK]:ENC_CAT})
        let updated_datavarr = await ipfs.add(Updaterecoverydata);

        part_to_removed = URK.substring(0,46)
        // console.log(URK)
        updated_urk = URK.replace(part_to_removed,updated_datavarr.path)

        //update MDT
        const NEWMDT = CryptoJS.AES.encrypt(updated_datavar.path,updated_urk);
        var NEWENCMDT = NEWMDT.toString()

        return new Promise((resolve,reject)=>{
            newobj = {UPDATED_CAT:ENC_CAT,UPDATED_URK:updated_urk,UPDATED_MDT:NEWENCMDT}
            resolve(newobj)
        })
        // console.log(datastr)
    }

}

exports.FetchUserObject = async function fetch_data(ENCAT,UUID,CUTUUIDFROM,CUTUUIDTO){
    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    const ED = EIDD.replaceAll("-","")

    const CAT = CryptoJS.AES.decrypt(ENCAT,ED);
    var DECAT = CAT.toString(CryptoJS.enc.Utf8)
    // console.log(DECAT)
    const datahash = DECAT.substring(0,46)


    let ipfs = await main();
    let datavar = await ipfs.cat(datahash)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        return new Promise((resolve,reject)=>{
            resolve(datastr)
        })
        // console.log(datastr)
    }
}

exports.AllowMultiDeviceAccess = async function MultiDeviceAccess(MDT,URK){

    const DeMDT = CryptoJS.AES.decrypt(MDT,URK).toString(CryptoJS.enc.Utf8)
    
    let ipfs = await main();
    let datavar = await ipfs.cat(DeMDT)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        return new Promise((resolve,reject)=>{
            resolve(datastr)
        })
    }

}

// Aveon Data Space in progress
exports.AddData = async function AddData(userjsondata,UUID,CUTUUIDFROM,CUTUUIDTO,RECSECRET){
    let ipfss = await main();
    let datavar = await ipfss.add(JSON.stringify(userjsondata));

    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) //UUID part slicing to be determined by developer using it.
    const ED = EIDD.replaceAll("-","")

    const URKhalf = uuidv4()
    const URK = URKhalf + RECSECRET
    // console.log("Key: " + datavar.path)
    // console.log("URK: " + URK)
    CATMIX = String(datavar.path) + uuidv4()
    const CAT = CryptoJS.AES.encrypt(CATMIX,ED);
    var ENCAT = CAT.toString()

    

    recoverydata = JSON.stringify({[URK]:ENCAT})
    let datavarr = await ipfss.add(recoverydata);
    UserURK = String(datavarr.path) + URKhalf //this will be added with developer recsec during recovery to match the key 

    const MDT = CryptoJS.AES.encrypt(datavar.path,UserURK);
    var ENCMDT = MDT.toString()

    return new Promise((resolve,reject)=>{
        retobj = {CAT:ENCAT,URK:UserURK,MDT:ENCMDT}
        resolve(retobj)
    })
}
exports.ReadData = async function read_data(ENCAT,UUID,CUTUUIDFROM,CUTUUIDTO){
    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    const ED = EIDD.replaceAll("-","")

    const CAT = CryptoJS.AES.decrypt(ENCAT,ED);
    var DECAT = CAT.toString(CryptoJS.enc.Utf8)
    // console.log(DECAT)
    const datahash = DECAT.substring(0,46)


    let ipfs = await main();
    let datavar = await ipfs.cat(datahash)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        return new Promise((resolve,reject)=>{
            resolve(datastr)
        })
        // console.log(datastr)
    }
}

exports.UpdateData = async function updatedata(credentialname,Updatedfield,ENCAT,UUID,CUTUUIDFROM,CUTUUIDTO,URK,RECSECRET){

    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    const ED = EIDD.replaceAll("-","")

    const CAT = CryptoJS.AES.decrypt(ENCAT,ED);
    var DECAT = CAT.toString(CryptoJS.enc.Utf8)
    // console.log(DECAT)
    const datahash = DECAT.substring(0,46)


    let ipfs = await main();
    let datavar = await ipfs.cat(datahash)
    for await(const i of datavar){

        let datastr = Buffer.from(i).toString()
        dataobj = JSON.parse(datastr)
        dataobj[credentialname] = Updatedfield
        updated_dataobj = dataobj
        // console.log("updated: " + updated_dataobj)
        let updated_datavar = await ipfs.add(JSON.stringify(updated_dataobj));


        //update 1sthalf of CAT
        updated_CAT = DECAT.replace(datahash,updated_datavar.path)
        const ENCRYPT_THE_CAT = CryptoJS.AES.encrypt(updated_CAT,ED);
        var ENC_CAT = ENCRYPT_THE_CAT.toString()

        //update 1st half(IPFS hash) of URK
        user_and_dev_mixed_urk_part = URK.substring(46,82)
        User_Dev_URK = user_and_dev_mixed_urk_part + RECSECRET
        Updaterecoverydata = JSON.stringify({[User_Dev_URK]:ENC_CAT})
        let updated_datavarr = await ipfs.add(Updaterecoverydata);

        part_to_removed = URK.substring(0,46)
        // console.log(URK)
        updated_urk = URK.replace(part_to_removed,updated_datavarr.path)

        //update MDT
        const NEWMDT = CryptoJS.AES.encrypt(updated_datavar.path,updated_urk);
        var NEWENCMDT = NEWMDT.toString()

        return new Promise((resolve,reject)=>{
            newobj = {UPDATED_CAT:ENC_CAT,UPDATED_URK:updated_urk,UPDATED_MDT:NEWENCMDT}
            resolve(newobj)
        })
        // console.log(datastr)
    }

}





// obj = {username:"lid hqiw",PAASSWD:"d23dh 3 d3"}
// var op = savedata(obj,"uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd","2","31","recsecx")
// console.log(op.then(x=>{console.log(x)}))

// lo = read_data("U2FsdGVkX1+OTS/JhrPxtyWuN9YvVqpyAMdqY2HmQJoerabCpimtFRdhnV6gDLx8N+Q5SCFqYDoSzoHW5rbpOaS/ATJMaBsdkpeK9Yt7J+JwCHcPviV8wWxRQWb9OTZ4pVLmt73y1UWDv1DpLNDBzA==","uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd","2","31","recsecx")
// console.log(lo.then(x=>{console.log(x)}))

// lo = recover_cat("Qmcb2kYqbLsWPeTKdzNRMVFDeMC1fym2HhR5qT9BfW4kuGc5170d0a-4a94-4bb6-9833-9eec4993fef4","recsecx")
// console.log(lo.then(x=>{console.log(x)}))

// lo = updatecredentials("userpfp","69bro","U2FsdGVkX1+SBz4ZzcmOTsy4IH/fxs+XxxdzWtBganf3Udarf8uwhVCw3duEnGfk5DjEmoFbbNRWOojQp4Uvy4toXn+GoOQclfZyzW1sCXoIWTK2rVjFS5ak/t+r78Uwe4bLXsXzw0tKlH/hBiG91g==","uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd","2","31","QmXbrKaCYvv2nRBVQ3iwGKhSn9ccKZdNaRaVQaFZ49E2ubc5170d0a-4a94-4bb6-9833-9eec4993fef4","recsecx")
// console.log(lo.then(x=>{console.log(x)}))

// const robj = {userpfp:12323}
//  lo = adduserRelations(robj,"U2FsdGVkX1+SBz4ZzcmOTsy4IH/fxs+XxxdzWtBganf3Udarf8uwhVCw3duEnGfk5DjEmoFbbNRWOojQp4Uvy4toXn+GoOQclfZyzW1sCXoIWTK2rVjFS5ak/t+r78Uwe4bLXsXzw0tKlH/hBiG91g==","uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd","2","31","QmXbrKaCYvv2nRBVQ3iwGKhSn9ccKZdNaRaVQaFZ49E2ubc5170d0a-4a94-4bb6-9833-9eec4993fef4","recsecx")
//  console.log(lo.then(x=>{console.log(x)}))

// lo = AllowMultiDeviceAccess("","","recsecx")
// console.log(lo.then(x=>{console.log(x)}))