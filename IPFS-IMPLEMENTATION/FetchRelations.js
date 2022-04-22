const aveon = require('./index.js')

const Encat = "U2FsdGVkX19nQ41FxkNVXijNlQB7eK62Nut7Re292aYXrW9u45b8YBf3S0DQZX3wnwgVirdMPL+44re9SurWk0/x3G61mX0LdaXSy7geUgo2ayD+Xx4DGui7UuNparEoGx8bTnZAzhmhcIsK++V88A=="
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"

var op = aveon.FetchUserObject(Encat,uuid,CUTUUIDFROM,CUTUUIDTO)

console.log(op.then(x=>{console.log(x)}))