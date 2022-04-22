const aveon = require('aveonfs')

const MDT = "U2FsdGVkX1/rfz0hZqDGIl6NQuJ5XMtE9clPd7M6Nb3wH7p/1PaKL9vQ2lxrogZWxFxrsKxhyWT3yCO0vW4PDQ=="
const URK = "QmT65o7yLJxByAmha85MEwP9QiEQdXCxqAHZcK1Dud7Hehf6b24ba1-1931-4b4b-bf9b-2f7f75d228b6"




var op = aveon.AllowMultiDeviceAccess(MDT,URK)

op.then(x=>{console.log(x)})