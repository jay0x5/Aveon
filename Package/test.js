//locally calling Register Function from index.js

const Reg = require("./index.js")

var outp = Reg.RegisterUser("WS1DQWD","P@wdqwd","M123123s12","134832487623")//username,password,mail,UUID

console.log(outp.then(x => { 
    console.log(x)
}))

//prints undefined instead of JsonObject which is being returned