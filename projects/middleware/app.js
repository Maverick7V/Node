const express=require("express")
const app =express()
const bodyParser=require('body-parser')
const morgan=require('morgan')


app.use(bodyParser.json())
app.user(morgan('dev'))
app.use((req,res,next)=>{
	console.log(`${req.method}:${req.url}` )
	next()
})

app.use((req,res,next)=>{
	if(req.query.api_key){
		next()
	}
	else{
		res.status(401).send({msg:'Not authorized to use this api'})
	}
})

app.post('/addInfo',(req,res)=>{
	console.log(req.body)
	res.send({msg:'addInfo'})
})

app.get('/',(req,res)=>{
	res.send({msg:'hello world'})
})

app.get('/accounts',(req,res)=>{
	res.send({msg:'accounts'})
})

app.get('/transactions',(req,res)=>{
	res.send({msg:'transactions'})
})


app.listen(3000)
