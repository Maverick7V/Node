const mongodb=require('mongodb')

const MongoClient=mongodb.MongoClient

//connection uri
const url='mongodb://localhost:27017/test'

MongoClient.connect(url,{useNewUrlParser: true},(err,client)=>{
	const db=client.db('test')
	console.log('db::')
	if(err)
		return process.exit(1)
	console.log('conection to mongo db was done successfully')
	//queries etc 
	insertdocument(db,()=>{
		updateDocuments(db,()=>{
			removeDocument(db,()=>{
				findDocument(db,()=>{
						client.close()
				})
			})
		})
	})	
})


//insert documents
const insertdocument=(db,callback)=>{
	var collection=db.collection('test')
	collection.insertMany([
		{name:'John'},
		{name:'Doe'},
		{name:'Smith'}
		],(error,result)=>{
			if(error)
				return process.exit(1)
			console.log(result.result.n)
			console.log(result.ops.length)
			console.log('inserted 3 docs')
			callback(result)
		})
}

//update documents

const updateDocuments=(db,callback)=>{
	var collection=db.collection('test')
	const name = 'Peter'
  collection.updateOne({ name : name }, { $set: { grade : 'A' } }, (error, result) => {
      if (error) return process.exit(1)
      console.log(result.result.n) // will be 1
      console.log(`Updated the student document where name = ${name}`)
      callback(result)
  })
}

//remove a document

const removeDocument=(db,callback)=>{
	var collection=db.collection('test')
	const name='Doe'
	collection.deleteOne({name:name},(error,result)=>{
		if(error)
			return process.exit(1)
		console.log(`${name} removed successfully`)
	})
}

//finding a document

const findDocument=(db,callback)=>{
	var collection=db.collection('test')
	collection.find({},(error,result)=>{
		if(error)
			return process.exit(1)
		console.log('found::',result.length)
	})
}

