//Testing Login
const {LoginUser} = require("./index.js")
const UUID = String("31444335-3730-3451-5744-6C02E07DD074")
var var1 = LoginUser('U2FsdGVkX1/xfmfFlWfvq0XN2DCSD4/e21bqmyQdecdCV9pR4Nt4oWIrp0Zk9muK40j8suD8kZ2wO3SEZazJSRBeTHEoBFeUn5yAVVa/tIM0NI4VXH1rqHS0NkuU8QM/',UUID,"2","30")
//encrypted CAT,UUID,UUIDparameter to slice UUID from[can be an int or a string], parameter to slice UUID to[can be an int or a string]

var1.then(x=>
    {
        
        console.log(x)
    
    
    })