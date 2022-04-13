//test Update functions

const Aveon = require("./index.js")
const UUID = "31444335-3730-3451-5744-6C02E07DD074"

//testing if username can be updated
var UpdateuName = Aveon.UpdateUserName('NUSSS213sws12','U2FsdGVkX1+LVHvSXSqtf2ItRBTJuDRGPzX1ywUXFcutPS7GHJiRh3QV0CQ9nvF+UedjOpjKg6hCWqecJf7S/XT8oyixaeh3VauAGIPg8T7TA3ag/ldCMcQ3+9FyTjk0',UUID,"2","30")
console.log(UpdateuName.then(x=>{

    console.log(x)
}))

//testing if mail can be updated
var UpdateMail = Aveon.UpdateMail('NMAAY123269sws12','U2FsdGVkX1+LVHvSXSqtf2ItRBTJuDRGPzX1ywUXFcutPS7GHJiRh3QV0CQ9nvF+UedjOpjKg6hCWqecJf7S/XT8oyixaeh3VauAGIPg8T7TA3ag/ldCMcQ3+9FyTjk0',UUID,"2","30")
console.log(UpdateMail.then(y=>{

    console.log(y)
}))