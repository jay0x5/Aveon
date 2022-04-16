//test Update functions

const Aveon = require("./index.js")
const UUID = "31444335-3730-3451-5744-6C02E07DD074"

//testing if username can be updated
var UpdateuName = Aveon.UpdateUserName('NUSSS213sws12','U2FsdGVkX18N/UOyq9rZ9EYqXqgROCY1ZjcyRqTpxBdMH2hd1+mQ3oDm4WS8xS4aQylrogtFtHCgNzTZlf3FbuNmhAnWaCUBcLj2RoSaI8AP/Q0Lsx8fS6OeKhQKE4BS',UUID,"2","30")
console.log(UpdateuName.then(x=>{

    console.log(x)
}))

//testing if mail can be updated
var UpdateMail = Aveon.UpdateMail('NMAAY123269sws12','U2FsdGVkX18N/UOyq9rZ9EYqXqgROCY1ZjcyRqTpxBdMH2hd1+mQ3oDm4WS8xS4aQylrogtFtHCgNzTZlf3FbuNmhAnWaCUBcLj2RoSaI8AP/Q0Lsx8fS6OeKhQKE4BS',UUID,"2","30")
console.log(UpdateMail.then(y=>{

    console.log(y)
}))