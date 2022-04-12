//test Update functions

const Aveon = require("./index.js")
const UUID = "31444335-3730-3451-5744-6C02E07DD074"

//testing if username can be updated
var UpdateuName = Aveon.UpdateUserName('NU!sws12','U2FsdGVkX18cf1YlG9/6+TTRf6RObB0yr0X9RnWgow96PNtQy1fiebG1e6kPMLm672+AKk1qtnBxinnEs2/PmolkTbjXbCFdd8VQksD9GMA8P/94s5pCcrKITKFZw6GT',UUID,"2","30")
console.log(UpdateuName.then(x=>{

    console.log(x)
}))

//testing if mail can be updated
var UpdateMail = Aveon.UpdateMail('NM269sws12','U2FsdGVkX18cf1YlG9/6+TTRf6RObB0yr0X9RnWgow96PNtQy1fiebG1e6kPMLm672+AKk1qtnBxinnEs2/PmolkTbjXbCFdd8VQksD9GMA8P/94s5pCcrKITKFZw6GT',UUID,"2","30")
console.log(UpdateMail.then(y=>{

    console.log(y)
}))