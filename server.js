const express = require('express')
const app = express()
const HotelCollection = require("./hotelCollection.js")
const hotel = require("./hotel.js")

const collection = new HotelCollection()


//Serves frontend webpage
app.use(express.static("public"))

//Start server
app.listen(3000, ()=>{
    console.log("Server is listening on port 3000. Ready to accept request.")
})

app.get('/list-hotels', (req,res) =>{
        

        //return list of hotels
        res.send(collection.hotels)
})

app.post('/create-hotel', (req,res) =>{
    const newHotel = new hotel('Area One', 'London')
    newHotel.addReview(5)
    collection.add(newHotel)

    //return list of hotels
    res.send(collection.hotels)
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