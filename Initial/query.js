const db = require('gun')();


const noderesult = db.get('Enter desired URK/UAK value').once(v =>{
        console.log(v)
        });





