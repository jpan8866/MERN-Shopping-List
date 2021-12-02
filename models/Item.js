const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('item', ItemSchema);
// Item is our database. Export so we can use it in other files to add or retrieve
module.exports = Item;