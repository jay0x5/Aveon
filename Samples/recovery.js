

const aveon = require('aveonfs')

const URK = "QmdWiJ9QKrJfC96pnoPEuy47UdpEcCSrYcQLFHUm8m68hgf6b24ba1-1931-4b4b-bf9b-2f7f75d228b6"
const RECSECRET = "recsecx"


var op = aveon.RecoverUserCAT(URK,RECSECRET)

op.then(x=>{console.log(x)})