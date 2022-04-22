const aveon = require('aveonfs')

const Encat = "U2FsdGVkX19KIp6c7bWDJxChtjUPWnsQGSLYsnSrClAwihVSg6CJdt15BFMdqoQygF/+zNWgsX0cDGhqOUB7ZCjw8vjxEz3knT0ttmHrl29xwhGHHtUYMZpLXXd0PQ+hQC0ezHDlljNvwSqY230nJw=="
const uuid = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const CUTUUIDFROM = "2"
const CUTUUIDTO = "31"
const RECSECRET = "recsecx"
const URK = "QmdWiJ9QKrJfC96pnoPEuy47UdpEcCSrYcQLFHUm8m68hgf6b24ba1-1931-4b4b-bf9b-2f7f75d228b6"
const relations_obj = {userpfp:12323}

var op = aveon.AddUserRelations(relations_obj,Encat,uuid,CUTUUIDFROM,CUTUUIDTO,URK,RECSECRET)

op.then(x=>{console.log(x)})