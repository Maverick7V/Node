const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const morgan=require('morgan')

app.use(bodyParser.json())

app.use(morgan('dev'))

app.use((req,res,next)=>{
	console.log(`${req.method}: ${req.url}`)
	next()
})

// app.use((req,res,next)=>{
// 	if(req.query.api_key){
// 		next()
// 	}
// 	else{
// 		res.status(401).send({msg:'Not authorized to use this url'})
// 	}
// })
app.get('/',(req,res)=>{
	res.send({msg:'hello neo'})
})

app.get('/matrix',(req,res)=>{
	res.send({msg:'welcome to the matrix'})
})

app.get('/source',(req,res)=>{
	res.send({msg:'welcome to the source Neo'})
})

app.post('/kill',(req,res)=>{
	res.send({msg:'you killed smith'})
})

app.listen(3000)
