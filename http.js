const http=require('http')
const url='http://nodeprogram.com'

http.get(url,(response)=>{
	response.on('data',(chunk)=>{
		console.log(chunk.toString('utf-8'))
	})
	response.on('end',()=>{
		console.log("fetched all data")
	})
}).on('error',(error)=>{
	console.error(`Got error: ${error.message}`)
})