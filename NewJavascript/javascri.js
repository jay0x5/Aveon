const fs = require('fs')
const spawner = require('child_process').spawn
const {v4: uuidv4} = require("uuid")
const CryptoJS = require("crypto-js");


const data = JSON.stringify({JSO: "LOL"})

const python_process = spawner('python',['./index.py',data])
// console.log(data)
python_process.stdout.on('data',(data)=>{
    console.log(data.toString())
})
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

async function savedata(userjsondata,UUID,CUTUUIDFROM,CUTUUIDTO,RECSECRET){
    let ipfss = await main();
    let datavar = await ipfss.add(userjsondata);

    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) //UUID part slicing to be determined by developer using it.
    const ED = EIDD.replaceAll("-","")

    const URKhalf = uuidv4()
    const URK = URKhalf + RECSECRET
    console.log("Key: " + datavar.path)
    console.log("URK: " + URK)
    CATMIX = String(datavar.path) + uuidv4()
    const CAT = CryptoJS.AES.encrypt(CATMIX,ED);
    var ENCAT = CAT.toString()

    const MDT = CryptoJS.AES.encrypt(datavar.path,);
    var ENCAT = CAT.toString()

    recoverydata = JSON.stringify({[URK]:ENCAT})
    let datavarr = await ipfss.add(recoverydata);
    UserURK = String(datavarr.path) + URKhalf //this will be added with developer recsec during recovery to match the key 

    return new Promise((resolve,reject)=>{
        retobj = {CAT:ENCAT,URK:UserURK}
        resolve(retobj)
    })
}

async function read_data(ENCAT,UUID,CUTUUIDFROM,CUTUUIDTO,RECSECRET){
    const EIDD = String(UUID.substring(CUTUUIDFROM,CUTUUIDTO)) 
    const ED = EIDD.replaceAll("-","")

    const CAT = CryptoJS.AES.decrypt(ENCAT,ED);
    var DECAT = CAT.toString(CryptoJS.enc.Utf8)
    console.log(DECAT)
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
async function recover_cat(USERURK,RECSECRET){
    

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

// obj = JSON.stringify({isese:"u231see"})
// var op = savedata(obj,"uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd","2","31","recsecx")
// console.log(op.then(x=>{console.log(x)}))

// lo = read_data("U2FsdGVkX1+Q1Hj0nounDUHsRUHYUaXlw9wN2oop+3Lc8EgADmglvOxF9D27Oj7nZf/DhwYlCIcpXx7n0dwTQ0SHzFDw3IN7uIvYUTwL2lR4n5JfBIK665hAaaH39f/p7Nvb7p1Rb5j4JICa60bnNQ==","uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd","2","31","recsecx")
// console.log(lo.then(x=>{console.log(x)}))

// lo = recover_cat("QmaiykeduUrkWF11QvH1PVJM5aHrHLXngTJsPaUoSUzgJCe6c212e6-cbee-44fb-ba65-87f8878aeb0c","recsecx")
// console.log(lo.then(x=>{console.log(x)}))