const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
  center_id: { type: Number, required: true, unique: true },
  name: String,
  location: 
  {
    street : String,
    city: String,
    state: String,
    country: String,
    zip_code: String,
  },
  contact_number: String,
  capacity: Number
});

module.exports = mongoose.model('WasteCollectionCenter', centerSchema);
