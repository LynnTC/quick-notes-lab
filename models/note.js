const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Notes', noteSchema);