const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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
    country: String,
    reviews:[
      {
        type:Schema.Types.ObjectId,
        ref: "Review"
      }
    ],
});

listingSchema.post("findOneAndDelete", async(listing) =>{
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;