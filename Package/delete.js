const aveon = require("./index.js")

const UUID = String("31444335-3730-3451-5744-6C02E07DD074")

const encat = "U2FsdGVkX18N/UOyq9rZ9EYqXqgROCY1ZjcyRqTpxBdMH2hd1+mQ3oDm4WS8xS4aQylrogtFtHCgNzTZlf3FbuNmhAnWaCUBcLj2RoSaI8AP/Q0Lsx8fS6OeKhQKE4BS"

const CUTUUIDFROM = 2

const CUTUUIDTO = 30
var var1 = aveon.DeleteUser(encat,UUID,CUTUUIDFROM,CUTUUIDTO)

result = var1.then(x=>{
    console.log(x)
})