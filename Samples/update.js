const aveon = require('aveonfs')

const Encat = "U2FsdGVkX19PMlQ9EDUfI4JFfvLQyvXTCSbo2V1/Kr1kWFNmRhaWib+IsD3Rmy2OV2+VBZw0e+mq8HLjOc8GHg4lE27pCLBet9iQjvyyz0DitNp70ciOoXRewD9b6Y7wz4HIzxV2EjxLdtb2zsyTmQ=="
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const URK = "QmNwHC2S3jTgPm38jMNtZBfUn1ofieMsFxcfftNNRkfFJdf6b24ba1-1931-4b4b-bf9b-2f7f75d228b6"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"
const credential_field = "username"
const new_username = "Updated121sO1so"


var op = aveon.UpdateUser(credential_field,new_username,Encat,uuid,CUTUUIDFROM,CUTUUIDTO,URK,RECSECRET)

op.then(x=>{console.log(x)})