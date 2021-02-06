const mongoose = require('mongoose')
 
const userSchema = mongoose.Schema({
    userName: String,
    memebershipNo: Number,
    rentalDuration: Number,
    returnDate: String
})
const schema = mongoose.model('userinfo', userSchema);
module.exports = schema