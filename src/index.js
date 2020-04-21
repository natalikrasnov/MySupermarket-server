const express = require('express')
require('../src/database/mongoose')

const app = express()

app.use(express.json())

app.set('port', process.env.PORT || 3000)

app.get('/',function(req,res){
    res.send('App is running')
}).listen(app.get('port'), function(){
    console.log('App is running , server is listenning on port ', app.get('port'))
})