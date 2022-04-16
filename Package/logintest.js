//Testing Login
const {LoginUser} = require("./index.js")
const UUID = String("31444335-3730-3451-5744-6C02E07DD074")
var var1 = LoginUser('U2FsdGVkX18N/UOyq9rZ9EYqXqgROCY1ZjcyRqTpxBdMH2hd1+mQ3oDm4WS8xS4aQylrogtFtHCgNzTZlf3FbuNmhAnWaCUBcLj2RoSaI8AP/Q0Lsx8fS6OeKhQKE4BS',UUID,"2","30")
//encrypted CAT,UUID,UUIDparameter to slice UUID from[can be an int or a string], parameter to slice UUID to[can be an int or a string]

var1.then(x=>
    {
        
        console.log(x)
    
    
    })