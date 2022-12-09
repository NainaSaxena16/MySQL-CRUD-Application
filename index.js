const express=require('express')
const db=require('./model/connection')
const app=express()

//app.get("/test",(req,res)=>{
  //  res.send("<h1>hello world!!</h1>")
//})

app.use(express.json())
app.use(require('./controllers/employeeController'))

const port=3000
app.listen(port,()=>console.log(`Server is running at the port ${port}`))   //runned by npm run dev