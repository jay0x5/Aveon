const db = require('gun')();


const noderesult = db.get('e18621a5-7e7e-447d-bda0-f6e61927103b').once(v =>{
        console.log(v)
        });





