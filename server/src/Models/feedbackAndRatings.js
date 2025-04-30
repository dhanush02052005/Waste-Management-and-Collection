const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedback_id: { type: Number, required: true, unique: true },
  user_id: { type: String, ref: 'User', required: true },
  collection_id: { type: Number, ref: 'WasteCollectionSchedule', required: true },
  rating: Number,
  comments: String,
  feedback_date: Date
});

module.exports = mongoose.model('Feedback', feedbackSchema);
