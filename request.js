const http=require('http')
const port=3000

http.createServer((request,response)=>{
	console.log(request.headers)
	console.log(request.method)
	console.log(request.statusCode)
	console.log(request.url)

	if(request.method=='POST'){
		let buff=''
		request.on('data',(chunk)=>{
			buff+=chunk
		})
		request.on('end',()=>{
			console.log('data is :'+buff)
		})
	}
	else{
		response.writeHead(200,{'Content-Type':'text/plain'})
		response.end('Hello World  \n')
	}
}).listen(port)
