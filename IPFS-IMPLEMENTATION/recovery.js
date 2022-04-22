const aveon = require('./index.js')

const URK = "QmWH7sakPC9gEeRz2iKrXvfE4YzAsfhNToiwxPvmYobSEQ7636497b-ae0e-48e1-95f3-a574f2408c7e"
const RECSECRET = "recsecx"


var op = aveon.RecoverUserCAT(URK,RECSECRET)

console.log(op.then(x=>{console.log(x)}))