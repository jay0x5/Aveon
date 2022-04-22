const aveon = require('./index.js')

const Encat = "U2FsdGVkX1+L8Ed3BgwgXjWJFDcjucydZyYeI14spltZRQQEulTYe4zq8S176ydGdhRD9WMKiyO7BPwawvkhwx3hxsjYK3HL4/nATZLN3iacCleiwPPi0c3tbUDwcNKJR13nS1HTTMPQGI5q+kzDFw=="
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"

var op = aveon.ReadData(Encat,uuid,CUTUUIDFROM,CUTUUIDTO,RECSECRET)

console.log(op.then(x=>{console.log(x)}))