var job=require('job')
var job =new job.Event()

job.on('done',function(details){
	console.log('weekly email job was completed at',details.completedOn)
})
job.emit('start')
