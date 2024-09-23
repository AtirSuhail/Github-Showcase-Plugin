const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: String,
    city: { type: String, default: 'Unknown' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', mySchema);