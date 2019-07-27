const mongodb=require('mongodb')
const async=require('async')
const customers=require('./customer.json')
const addresses=require('./address.json')

const MongoClient=mongodb.MongoClient

const url='mongodb://localhost:27017/customersData'

MongoClient.connect(url,{useNewUrlParser:true},(error,client)=>{
	const db=client.db('userDb')
	if(error)
		process.exit(1)

	for (var i = 0; i < customers.length; i++) {
    insertDocument(i,db,()=>{
    	if(i==customers.length)
    		client.close()
    })
    }	
})



const insertDocument=(position,db,callback)=>{
	const collection=db.collection('customerInfo')
	customers[position]=Object.assign(customers[position],addresses[position])
	collection.insertOne(customers[position],(error,result)=>{
			if(error)
				return process.exit(1)
			console.log(result.result.n+" inserted")
			callback(result)
		})
	
}


// const limit=parseInt(process.argv[2],10)||1000

// customers.forEach((customer,index,list)=>{
// 	customers[index]=Object.assign(customer,addresses[index])
// })
// async.parallel(tasks,(error,results)=>{
// 	if(error)
// 		console.error(error)
// 	console.log(results)
// })

