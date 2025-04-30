const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  name: String,
  email: String,
  phone_number: Number,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip_code: Number
  },
  role: { type: String, enum: ['admin', 'collector', 'citizen'], required: true }
});

module.exports = mongoose.model('User', userSchema);
