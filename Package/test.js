//locally calling Register Function from index.js


const {RegisterUser} = require("./index.js")

// var regres = Reg.RegisterUser("WS1DQWD","P@wdqwd","M123123s12","134832487623")//username,password,mail,UUID

// var logres = Reg.Loginuser("b2354824-4dac-4adb-b7c1-7dd6d72aceb93f53a35c-d542-4be3-8ccb-c43299187a52","134832487623")
// console.log(regres.then(x => { 
//     console.log(x)
// }))
// console.log(logres.then(x => { 
//     console.log(x)
// }))

//prints undefined instead of JsonObject which is being returned
RegisterUser("WSDIC1DQWD","P@wdqwd","M123123s12","31444335-3730-3451-5744-6C02E07DD074")

// console.log(regres)
// console.log(logres)