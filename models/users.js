const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    userFirstName: {
        type: String,
        required: true
    },


    userLastName: {
        type: String,
        required: true
    },

    userPassword: {
        type: String,
        required: true 
    },

    
    userEmail: {
        type: String,
        required: true

    },


}, { timestamps: true});


const User = mongoose.model("User", userSchema);

module.exports = User;