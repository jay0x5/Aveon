/*had to create a query.js for this folder code files too since idk why but any user created within
this folder is non existent if i try to query that user from query.js of another folder lmao! could
be a weird bug? or i think i am doing something wrong??!*/


const db = require('gun')();
const noderesult = db.get('Enter your desired URK/UAK value').once(v =>{
        console.log(v)
        });

