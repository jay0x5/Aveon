const aveon = require('aveonfs')

const Encat = "U2FsdGVkX18dd5xIavrusBB3xXhUOtE2JHnHHxwiMwx5KEPS2Rkk4zmlF34oJ8QOdavfC2EnLqIPBZv9lyVX0KwVwKRdc6xZd9NB7t6XKGeX65q1DCE8BEsLCrIiyfiKdkbOLtRGWaMn4lSH2cRISA=="
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"

var op = aveon.LoginUser(Encat,uuid,CUTUUIDFROM,CUTUUIDTO,RECSECRET)

op.then(x=>{console.log(x)})