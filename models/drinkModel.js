const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    CategoryName: {type:String, require},
    name:{type:String, require},
    img:{type:String, require},
    description:{type:String, require},
    price: []

}, {
    timestamps: true,
})

const drinkModel = mongoose.model('beverages', drinkSchema)

module.exports = drinkModel;