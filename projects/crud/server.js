const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const morgan=require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

let profile=[{
	"name":"sid",
	"email":"sid@sid.com",
	"url":"aboutme/sid"
}]


app.get('/profile',(req,res)=>{
	console.log('get received')
	if(req.query.id){
		console.log('id:',req.query.id)
		return res.send(profile[req.query.id])
	}
	res.send(profile)
})


app.post('/profile',(req,res)=>{
	profile.push(req.body)
	console.log('created profile')
	res.sendStatus(201)
})

app.put('/profile/:id',(req,res)=>{
	Object.assign(profile[req.params.id],req.body)
	console.log('updated',profile[req.params.id])
	res.sendStatus(204)
})

app.delete('/profile/:id',(req,res)=>{
	profile.splice(req.params.id,1)
	console.log('profile deleted successfully')
	res.sendStatus(205)
})

app.listen(3000)






