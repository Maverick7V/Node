const http=require('http')
const postData=JSON.stringify({foo:'bar'})

const options={
	hostname:'mockbin.com',
	port:80,
	path:'/request/foo=bar&foo=baz',
	method:'POST',
	headers:{
		'Content-type':'application/x-www-form-url-encoded',
		'Content-Length':Buffer.byteLength(postData)
	}
}

const req=http.request(options,(res)=>{
	res.on('data',(chunk)=>{
		console.log(chunk)
	})
	res.on('end',()=>{
		console.log('getting data from api is complete')
	})
})
req.on('error',(error)=>{
	console.error(`error received is ${error.message}`)
})
