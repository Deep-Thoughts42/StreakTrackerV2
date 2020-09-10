const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({

    habitTitle: {
        type: String,
        required: true,
    },

    habitDescription: {
        type: String,
        required: true, 

    },

    habitReason: {
        type: String,
        required: false,
        default: "Because I want to" 
        
    },

    timeSinceStart: {
        type: Date,
        required: true,
        default: Date()
    }


}, { timestamps: true});


const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;