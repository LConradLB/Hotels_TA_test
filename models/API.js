//static class API{
    let express = require('express')
    let app = express()

    app.get('/', (req, res) => res.send('Hello World!'))
    console.log(res)
//}