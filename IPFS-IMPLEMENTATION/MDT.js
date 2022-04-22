const aveon = require('./index.js')

const MDT = "U2FsdGVkX19RzCt23IBrbTjg+Zmd9xOPlybFk7+rolM90eb73Sc37kRQamvUQPHEI/fQlr+dxova3+fWjR7yxA=="
const URK = "QmWH7sakPC9gEeRz2iKrXvfE4YzAsfhNToiwxPvmYobSEQ7636497b-ae0e-48e1-95f3-a574f2408c7e"




var op = aveon.AllowMultiDeviceAccess(MDT,URK)

op.then(x=>{console.log(x)})