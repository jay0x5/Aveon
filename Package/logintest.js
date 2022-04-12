//Testing Login
const {LoginUser} = require("./index.js")
const UUID = String("31444335-3730-3451-5744-6C02E07DD074")
var var1 = LoginUser('U2FsdGVkX18cf1YlG9/6+TTRf6RObB0yr0X9RnWgow96PNtQy1fiebG1e6kPMLm672+AKk1qtnBxinnEs2/PmolkTbjXbCFdd8VQksD9GMA8P/94s5pCcrKITKFZw6GT',UUID,"2","30")
//encrypted CAT,UUID,UUIDparameter to slice UUID from[can be an int or a string], parameter to slice UUID to[can be an int or a string]

var1.then(x=>
    {
        console.log("POG")
        console.log(x)
    
    
    })