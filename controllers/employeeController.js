const express= require('express')
const db=require('../model/connection')

const router=express.Router()

router.post("/employee",(req,res)=>{
    //console.log(req.body)
    const user= {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.mobile,
        city:req.body.city
    }
    let sql="INSERT INTO `users` SET ?"
    db.query(sql,user,(err,result)=>{
        if(err) throw err
    res.status(200).json(result)
    })
})

router.get("/employee",(req,res)=>{
    let sql="SELECT * FROM `users`"
    db.query(sql,(err,result)=>{
        if(err) throw err
        res.status(200).json(result)
    })
})

router.get("/employee/:id",(req,res)=>{
    let sql="SELECT * FROM `users` WHERE id="+req.params.id
    db.query(sql,(err,result)=>{
        if(err) throw err
        res.status(200).json({result})
})
})

router.delete("/employee/:id",(req,res)=>{
    let sql="DELETE FROM `users` WHERE id="+req.params.id
    db.query(sql,(err,result)=>{
        if(err) throw err
        res.status(200).json({result})
})
})

router.put("/employee/:id",(req,res)=>{
    const {name,email,city,mobile}=req.body
    let sql=`UPDATE users SET name='${name}',email='${email}',city='${city}',phone='${mobile}' WHERE id=${req.params.id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        res.status(200).json({result})
    })
})

module.exports=router