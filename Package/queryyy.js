/*had to create a query.js for this folder code files too since idk why but any user created within
this folder is non existent if i try to query that user from query.js of another folder lmao! could
be a weird bug? or i think i am doing something wrong??!*/

/*Unpopular opnion: we could market this bug as a security feature saying this document cannot be 
accessed by any other location but this folder instead.*/


const db = require('gun')();

const noderesult = db.get('fc964609-c34d-4e82-8cd6-1e9632d0a031').once(v =>{
        console.log(v)
        });

