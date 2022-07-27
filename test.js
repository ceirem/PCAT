const mongoose = require('mongoose');
const { findByIdAndDelete, findByIdAndRemove } = require('moongose/models/user_model');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
Photo.create({
  title: 'Photo title 2',
  description: 'Photo description 2 lorem ipsum',

});

//read a photo

// Photo.find({ title: 'Photo title 1'}, (err,data) => {
//     console.log(data)
// })


 const id = "62df84ac7d174b45ee737106"
// Photo.findByIdAndUpdate(
//     id, 
//     {
//     title: 'Photo title 1 updated',
//     description: 'Photo description updated 1 lorem ipsum'
//     }, 
//     (err,data) => {
//         console.log(data)
//     }
// )

//delete a photo
Photo.findByIdAndRemove(
    id,(err,data) => {
        console.log(data)
    }
    )


