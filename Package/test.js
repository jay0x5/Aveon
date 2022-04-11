//locally calling Register Function from index.js


const {RegisterUser} = require("./index.js")

var registres = RegisterUser("WSDIC1DQWD","P@wdqwd","M123123s12","31444335-3730-3451-5744-6C02E07DD074","2","30","$WKR@I%")

//retrieving the returned CAT and URK
registres.then(x=>
    {
        console.log("POG")
        console.log(x)
    
    
    })
//username,password,mail,UUID,parameter to slice UUID from, parameter to slice UUID to, RECOVERY SECRET


