const express = require('express')
const app = express()

//Serves frontend webpage
app.use(express.static("public"))

//Start server
app.listen(3000, ()=>{
    console.log("Server is listening on port 3000. Ready to accept request.")
})

app.get('/list-hotels', (req,res) =>{
        let dummyList = [{
            name:"Area One",
            rating:9,
            location:"London"
        },
        {
            name:"Area Two",
            rating:8,
            location:"San Francisco"
        }
        ]
        res.send(dummyList)
    })












// app.get('/', (req,res) =>{
//     console.log('Obtaining request')
//     res.send('Hello you')
// })

// app.get('/hotels', (req,res) =>{
//     console.log('Obtaining request')
//     const hotel = {
//         name: "Ritz",
//         rating: 5
//     }
//     res.send(hotel)
// })

//app.post