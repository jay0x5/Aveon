//Testing Login
const {LoginUser} = require("./index.js")
const UUID = String("31444335-3730-3451-5744-6C02E07DD074")
var var1 = LoginUser('U2FsdGVkX18Ct+b+ux/Toq6JyUWF6qRmKXOXVr5fuXRB8WEVnD5CPydeaVy4n5fZx//KVAhwMFKNSozMHveNTlpT8kRcAjvOsXc6ER0WWyuacOMYvdShaapR+zuMTc3H',UUID,"2","30")
//encrypted CAT,UUID,UUIDparameter to slice UUID from[can be an int or a string], parameter to slice UUID to[can be an int or a string]

var1.then(x=>
    {
        console.log("POG")
        console.log(x)
    
    
    })