const aveon = require("./index.js")

const mdt = "U2FsdGVkX19BbhbqxAeTb/lXGNZpGr8VoVRXlPWf6aj96Hj9SCkxvmvSwayJlxNIaqBrub8owd871CMICBINPw=="
const urk = "cc11434f-cf6a-4cb6-95e5-1425e3f86c64$WKR@I%"
const migvar = aveon.MigrateUser(mdt,urk)

migvar.then(x=>{
    console.log(x)
})
