
const express=require('express')
const bodyParser=require('body-parser')
const errorhandler=require('errorhandler')
const logger=require('morgan')

const posts=require('./routes/posts')
const comments=require('./routes/comments')

let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you donâ€™t know what is ES6, itâ€™s a new JavaScript implementation.',
    comments: [
      {text: 'Cruelâ€¦..var { house, mouse} = No type optimization at all'},
      {text: 'I think youâ€™re undervaluing the benefit of â€˜letâ€™ and â€˜constâ€™.'},
      {text: '(p1,p2)=>{ â€¦ } ,i understand this ,thank you !'} 
    ]
  }
]
}

const app=express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
//sending store data to routes
app.use((req,res,next)=>{
  req.store=store
  next()
})

app.get('/posts',posts.getPost)
app.post('/posts',posts.addPost)
app.put('/posts/:id',posts.updatePost)
app.delete('posts/:id',posts.deletePost)


app.get('/posts/:postId/comments',comments.getComments)
app.post('/posts/:postId/comments',comments.postComment)
app.put('/posts/:postId/comments/:commentId',comments.updateComment)
app.delete('/posts/:postId/comments/:commentId',comments.deleteComment)
app.listen(3000)