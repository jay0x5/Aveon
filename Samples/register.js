const aveon = require('aveonfs')

const obj = {username:"lid hqiw",PAASSWD:"d23dh 3 d3"}
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"

const var1 = aveon.RegisterUser(obj,uuid,CUTUUIDFROM,CUTUUIDTO,RECSECRET)
var1.then(x=>{console.log(x)})