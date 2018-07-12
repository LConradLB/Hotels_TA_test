const chai = require('chai');
const expect = chai.expect;

const HotelCollection = require("./../models/hotelCollection.js")
const Review = require("./../models/review")
const hotel = require("./../models/hotel.js")

let hotelCollection = new HotelCollection();
let hotel1 = new hotel("Hilton","London");
hotel1.addReview(new Review())
hotelCollection.add(hotel1)


describe("JSON Tests",()=>{
    describe("PARSING TO",()=>{
        it("Should parse an object to JSON",()=>{
            expect(hotelCollection.toJSON()).to.eql([])
        })
    })

    describe("PARSING FROM",()=>{
        it("Should parse from JSON to an object",()=>{
            expect(x).to.eql(y)
        })
    })

}) 

