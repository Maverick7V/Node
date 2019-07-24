const eventEmitter=require('events')
 
 class Job extends eventEmitter{

 }

 job=new Job()

 job.on('done',(timeDone)=>{
 	console.log('Job was pronounced done at::',timeDone)
 })

job.emit('done', new Date())
job.removeAllListeners()

class Event extends eventEmitter{
	constructor(ops){
		super(ops)
		this.on('start',()=>{
			this.process()
		})
	}
	process(){
		setTimeout(()=>{
			//emulate the delay of the job -async 
			this.emit('done',{completedOn:new Date()})
		},700)
	}
}