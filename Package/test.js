//locally calling Register Function from index.js


const {RegisterUser} = require("./index.js")
var rec = "$WKR@I%"
var registres = RegisterUser("WSAAADIC1DQWD","P@wdqwd","M123123s12","31444335-3730-3451-5744-6C02E07DD074",2,30,rec)

//retrieving the returned CAT and URK
registres.then(x=>
    {
        console.log("POG")
        console.log(x)
    
    
    })
//username,password,mail,UUID,parameter to slice UUID from[can be an int or a string], parameter to slice UUID to[can be an int or a string], RECOVERY SECRET


