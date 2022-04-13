const aveon = require("./index.js")

const mdt = "U2FsdGVkX1/415aqe+bHZ5sSAI0E/YHPXYui9Ez16dMglvpQB4OZ7QX8mac1sNJ0xTcF4ZWLpfRB1QS1KK6N1A=="
const urk = "06f008cd-f6ff-4774-9cd8-188b71252904$WKR@I%"
const migvar = aveon.MigrateUser(mdt,urk)

migvar.then(x=>{
    console.log(x)
})
