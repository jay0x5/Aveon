//test Update functions

const Aveon = require("./index.js")
const UUID = "31444335-3730-3451-5744-6C02E07DD074"

//testing if username can be updated
var UpdateuName = Aveon.UpdateUserName('NU22SS3241S213sws12','U2FsdGVkX1/xfmfFlWfvq0XN2DCSD4/e21bqmyQdecdCV9pR4Nt4oWIrp0Zk9muK40j8suD8kZ2wO3SEZazJSRBeTHEoBFeUn5yAVVa/tIM0NI4VXH1rqHS0NkuU8QM/',UUID,"2","30")
console.log(UpdateuName.then(x=>{

    console.log(x)
}))

//testing if mail can be updated
var UpdateMail = Aveon.UpdateMail('N21eMqswsqw2AAY123269sws12','U2FsdGVkX1/xfmfFlWfvq0XN2DCSD4/e21bqmyQdecdCV9pR4Nt4oWIrp0Zk9muK40j8suD8kZ2wO3SEZazJSRBeTHEoBFeUn5yAVVa/tIM0NI4VXH1rqHS0NkuU8QM/',UUID,"2","30")
console.log(UpdateMail.then(y=>{

    console.log(y)
}))