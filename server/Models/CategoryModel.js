const mongoose = require('mongoose');
const Schema = mongoose.Schema
const { ObjectId} = mongoose.Schema;
const CartSchema = new Schema({
 userId: {
   type: ObjectId,
   ref: 'products',
   required: true
 },
 id_product: {
    type: ObjectId,
    ref: 'products',
    required: true
 },
 quantity: {
  type: Number,
  required: true
},
 pay: {
 type: Boolean,
 required: true
},
 address: {
 type: String,
 required: false
}
})

module.exports = mongoose.model('carts' , CartSchema)
