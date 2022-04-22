const aveon = require('./index.js')

const Encat = "U2FsdGVkX1899WDnQtcHe75xYD7ONMH7JcfBmNVzmIf6QctsiIyCtpwvzuovIhQSqyw0DJEFuD5RJcd8dMZ8vDCmXU34076Hjq75IZUd6CYdNrHvhU38xsnIBognQsdltecfeIIsllZ7YIdJViVAEg=="
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"
const URK = "QmSKiUujHDgTPWs3GCGhfwpQMwzBRvw7iynFdie8Lv3DgG7636497b-ae0e-48e1-95f3-a574f2408c7e"
const relations_obj = {userpfp:12323}

var op = aveon.AddUserRelations(relations_obj,Encat,uuid,CUTUUIDFROM,CUTUUIDTO,URK,RECSECRET)

console.log(op.then(x=>{console.log(x)}))