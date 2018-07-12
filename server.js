const express = require('express')


const HotelCollection = require("./models/hotelCollection.js")
const review = require("./models/review")
const hotel = require("./models/hotel.js")

const app = express()
const fs = require('fs')

const collection = new HotelCollection()


//Serves frontend webpage
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())



//Start server
app.listen(2000, ()=>{
    console.log("Server is listening on port 3000. Ready to accept request.")
    collection.hotels = JSON.parse(fs.readFileSync('./hotelCollection.json', 'utf8'));

})

app.get('/list-hotels', (req,res) =>{

    collection.hotels = JSON.parse(fs.readFileSync('./hotelCollection.json', 'utf8'));
        //return list of hotels
        res.send(collection.hotels)
})

app.post('/create-hotel', (req,res) =>{
    const {hotelName, hotelLocation} = req.body
    const newHotel = new hotel(hotelName, hotelLocation)
    newHotel.addReview(5)
    collection.add(newHotel)
    console.log(req.body)

    fs.writeFileSync('./hotelCollection.json',collection.toJSON(), 'utf8', function (err) {
      if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
      } else{
          console.log('It\'s saved!');
      }
      });


    //return list of hotels
    res.send(collection.toJSON())
})
