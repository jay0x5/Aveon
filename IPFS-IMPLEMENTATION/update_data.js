const aveon = require('./index.js')

const Encat = "U2FsdGVkX19owfRSHodGrZSSjAkHTFWLNcKyNQd2OJ+maPnzo/JsWb1UjVguQZBwOVH5XNMeCpKmGG0W7pfrM2cEe0YPqU866CXb3+ed63g4ATfTUF7lwmElxIXeZtfgBCECnAzW4k3ws5PhhsheVg=="
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const URK = "QmTNuJRGhixh12rBif7VEmXZ9DowbUxK7QZpeV6RnjX7Ze7636497b-ae0e-48e1-95f3-a574f2408c7e"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"
const credential_field = "director"
const new_data_added = "C. Nolan"


var op = aveon.UpdateData(credential_field,new_data_added,Encat,uuid,CUTUUIDFROM,CUTUUIDTO,URK,RECSECRET)

console.log(op.then(x=>{console.log(x)}))