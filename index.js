const express=require('express')

const cors=require('cors')

const dataService=require('./services/data.service')

const app=express()

app.use(cors({
    origin:'http://localhost:4200'
}))

app.use(express.json())

app.post('/register',(req,res)=>{
    dataService.register(req.body.uname,req.body.uid,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })

  


})


app.listen(3000,()=>{
    console.log('server started at 3000');
})