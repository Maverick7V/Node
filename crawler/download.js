// const http=require('http')
// const path=require('path')
// const fs=require('fs')
// const uuidv1=require('uuid/v1')

// const downLoadPage=(url='http://nodeprogram.com')=>{
// 	console.log('downloading url '+url)
// 	const fetchPage=(urlF,callback)=>{
// 		http.get(url,(response)=>{
// 			let buff=''
// 			response.on('data',(chunk)=>{
// 				buff+=chunk
// 			})
// 			response.on('end',()=>{
// 				console.log('reading finish')
// 				callback(null,buff)
// 			})
// 	)}.on('error',(error)=>{
// 		console.error(error);
// 		callback(error)
// 	})
// }

// downLoadPage(process.argv[2])


// const downLoadPage=(url='http://nodeprogram.com')=>{

// 	console.log('downloading url::',url)
// 	const fetchPage=(urlF,callback)=>{

// 		http.get(urlF,(response)=>{
// 			let buff=''
// 			response.on('data',(chunk)=>{
// 				buff+=chunk
// 			})
// 			response.on('end',()=>{
// 				console.log('reading finish')
// 				callback(null,buff)
// 			})
// 		}).on('error',(error)=>{
// 			console.error(error)
// 			callback(error)
// 		})
// 	}

// }

const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const downLoadPage=(url='http://nodeprogram.com')=>{
	const fetchPage=(urlF,callback)=>{
		http.get(url,(response)=>{
		let buff=''
		response.on('data',(chunk)=>{
			buff+=chunk
		})
		response.on('end',()=>{
			callback(null,buff)
		})
		}).on('error',(error)=>{
			console.log('error above')
			 console.error(`Got error: ${error.message}`)
			callback(error)
	})
	}	

	const folderName=uuidv1()
	fs.mkdirSync(folderName)
	fetchPage(url,(error,data)=>{
		if(error){
			console.log('error received')
			return console.error(error)
		}
		fs.writeFileSync(path.join(__dirname,folderName,'url.txt'),url)
		fs.writeFileSync(path.join(__dirname,folderName,'file.html',data))
		console.log('downloading is done in folder name',folderName)
	})
}
downLoadPage(process.argv[2])

