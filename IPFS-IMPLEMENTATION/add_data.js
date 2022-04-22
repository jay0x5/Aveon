const aveon = require('./index.js')


const obj = {Movie: "Inception", Lead: "Leonardo DiCaprio"}
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"


var op = aveon.AddData(obj,uuid,CUTUUIDFROM,CUTUUIDTO,RECSECRET)

console.log(op.then(x=>{console.log(x)}))