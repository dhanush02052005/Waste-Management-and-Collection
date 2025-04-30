const mongoose = require('mongoose');

const wasteTypeSchema = new mongoose.Schema({
  waste_type_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  type_name: String,
  description: String
});

module.exports = mongoose.model('WasteType', wasteTypeSchema);
