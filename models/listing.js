const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    location:String,
    price:Number,
    image:{
        type:String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxVbWmF65TzywyOdjvO7vOFtoHXcEqidNwA&usqp=CAU",
        set: (v) => v===""? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxVbWmF65TzywyOdjvO7vOFtoHXcEqidNwA&usqp=CAU" : v
    },
    country: String
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;