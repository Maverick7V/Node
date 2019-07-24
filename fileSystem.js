const fs=require('fs')
const path=require('path')


fs.readFile(path.join(__dirname,'/read.txt'),{encoding:'utf-8'},function(error,data){
	if(error)
		return console.error(error)
	console.log(data)
})

fs.writeFile('read.txt','Adding this line via file system node module',(error)=>{
	if(error)
		return console.error(error)
	console.log("wrote files successfully")
})


fs.writeFile('hello.txt','writing via write file fs ',(error)=>{
	if(error)
		return console.error(error)
	console.log('wrote files successfully')
})

// fs.readFile(path.join(__dirname,'/hello.txt'),{encoding:'utf-8'},function(error,data){
// 	if(error)
// 		return console.error(error)
// 	console.log(data)
// })


fs.readFile(path.join(__dirname,'/hello.txt'),{encoding:'utf-8'},(error,data)=>{
	if(error)
		return console.error(error)
	console.log(data)
})