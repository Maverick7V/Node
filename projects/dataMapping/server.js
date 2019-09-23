const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/data')

let Book = mongoose.model('Book',{name:String})

let practicalNoteBook=new Book({name:'Song of ice and fire'})

practicalNoteBook.save((error,results)=>{

	if(error){
		console.error(error)
		process.exit(1)
	}
	else{
		console.log('data saved')
		process.exit(0)
	}
})