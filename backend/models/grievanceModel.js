const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grievanceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    status: {
        type: String, // You can use an enum here for predefined statuses
        required: true,
        default: 'pending' // Default status is 'pending', you can change it to whatever is suitable
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    imageUrl: {
        type: String,
        default: ''
    },
    reply: {
        type: String,
        default: '' // Default reply is an empty string, you can change it to whatever is suitable
    },
}, { timestamps: true });

module.exports = mongoose.model('Grievance', grievanceSchema);
