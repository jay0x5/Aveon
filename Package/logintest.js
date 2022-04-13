//Testing Login
const {LoginUser} = require("./index.js")
const UUID = String("31444335-3730-3451-5744-6C02E07DD074")
var var1 = LoginUser('U2FsdGVkX1+LVHvSXSqtf2ItRBTJuDRGPzX1ywUXFcutPS7GHJiRh3QV0CQ9nvF+UedjOpjKg6hCWqecJf7S/XT8oyixaeh3VauAGIPg8T7TA3ag/ldCMcQ3+9FyTjk0',UUID,"2","30")
//encrypted CAT,UUID,UUIDparameter to slice UUID from[can be an int or a string], parameter to slice UUID to[can be an int or a string]

var1.then(x=>
    {
        console.log("POG")
        console.log(x)
    
    
    })