const db = require('gun')();


const noderesult = db.get('Enter your desired URK/UAK value').once(v =>{
        console.log(v)
     
        });





