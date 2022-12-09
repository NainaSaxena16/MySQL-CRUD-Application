const mysql=require('mysql')

//Database Connection
const db=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"CRUD"
})
db.connect(function(err){
    if(err)
    throw err;
    else{
    console.log("Database Connected!!")}
})
module.exports=db