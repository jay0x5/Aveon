//test Update functions

const Aveon = require("./index.js")
const UUID = "31444335-3730-3451-5744-6C02E07DD074"

//testing if username can be updated
var UpdateuName = Aveon.UpdateUserName('NUSSS213sws12','U2FsdGVkX18wobnd3OFg43+F5nhc/OYTNAnbStAr8nzhQzbfZzZQ9Q60ahr+wn97Y2HoruLmx6Yf2Yw0OKpqHTo90rzDl7jZt1NhBtjcGL7V2+5QVCS6b7TzaJr22EjR',UUID,"2","30")
console.log(UpdateuName.then(x=>{

    console.log(x)
}))

//testing if mail can be updated
var UpdateMail = Aveon.UpdateMail('NMAAY123269sws12','U2FsdGVkX18wobnd3OFg43+F5nhc/OYTNAnbStAr8nzhQzbfZzZQ9Q60ahr+wn97Y2HoruLmx6Yf2Yw0OKpqHTo90rzDl7jZt1NhBtjcGL7V2+5QVCS6b7TzaJr22EjR',UUID,"2","30")
console.log(UpdateMail.then(y=>{

    console.log(y)
}))