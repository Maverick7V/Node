const http=require('http')
const port=3000
http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello my first server \n')
}).listen(port)

console.log(`server::/::/ http://localhost:${port}`)
