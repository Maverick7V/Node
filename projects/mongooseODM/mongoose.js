const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');

let Book =mongoose.model('Book',{name:String});

let practicalBook=new Book({name:'Core Java'});



// a document is an instance of a model 
// a model is someting abstract


practicalBook.save((err,results)=>{
	if(err){
		console.error(err);
		process.exit(1);
	}
	else{
		console.log('saved: ',results);
		process.exit(1);
	}
});

