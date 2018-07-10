const express = require('express')
const app = express()

//Start server
app.listen(3000, function(){
    console.log("Server is listening on port 3000. Ready to accept request.")
})

app.get('/', (req,res) =>{
    console.log('Obtaining request')
    res.send('Hello you')
})



//app.post