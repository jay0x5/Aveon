const aveon = require('./index.js')


const obj = {username:"lid hqiw",PAASSWD:"d23dh 3 d3"}
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"


var op = aveon.RegisterUser(obj,uuid,CUTUUIDFROM,CUTUUIDTO,RECSECRET)

console.log(op.then(x=>{console.log(x)}))