const express=require('express')
const app=express()

const logger=require('morgan')
const bodyParser=require('body-parser')
const errorHandler=require('errorhandler')

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())


let store={}

store.accounts=[]



app.get('/accounts',(req,res)=>{
	res.status(200).send(store.accounts)
})

app.post('/accounts',(req,res)=>{
	let  acc=req.body
	let id=store.accounts.length
	res.status(201).send({id:id})
})

app.put('/accounts/:id',(req,res)=>{
	let id=req.params.id
	store.accounts[id]=req.body
	res.status(200).send(store.accounts[id])
})

app.delete('/accounts/:id',(req,res)=>{
	store.accounts.splice(req.params.id, 1)
	res.status(200).send()
})

app.listen(3000)