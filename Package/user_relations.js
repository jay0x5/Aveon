//test function which allows devs to store user relations

const aveon = require('./index.js')

const cat = "U2FsdGVkX18wobnd3OFg43+F5nhc/OYTNAnbStAr8nzhQzbfZzZQ9Q60ahr+wn97Y2HoruLmx6Yf2Yw0OKpqHTo90rzDl7jZt1NhBtjcGL7V2+5QVCS6b7TzaJr22EjR"
const uuid = "31444335-3730-3451-5744-6C02E07DD074"

const RelationsObj = {UserPfp: "pfpencoded",Userbio: "bio1XDD21edd1de",UserFollowings: "noo1qdwdwdi2o"}
const relation_var = aveon.AddUserRelations(RelationsObj,cat,uuid,2,30) 

console.log(relation_var.then(x=>{

    console.log(x)
}))