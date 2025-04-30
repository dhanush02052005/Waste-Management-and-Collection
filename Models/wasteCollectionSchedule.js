const mongoose = require('mongoose');

const wasteCollectionScheduleSchema = new mongoose.Schema({
  schedule_id: { type: Number, required: true, unique: true },
  user_id: { type: String, ref: 'User', required: true },
  waste_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteType', required: true },
  collection_date: String,
  collection_time: String,
  status: String
});

module.exports = mongoose.model('WasteCollectionSchedule', wasteCollectionScheduleSchema);
