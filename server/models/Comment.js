const mongoose = require('mongoose');
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema;

const CommentSchema = new Schema({
 id_user: {
   type: ObjectId,
   ref: 'users',
   required: true
 },
 comment: {
    type: String,
    required: true
 },id_product: {
   type: ObjectId,
   ref: 'products',
   required: true
 }
})

module.exports = mongoose.model('comment' , CommentSchema)