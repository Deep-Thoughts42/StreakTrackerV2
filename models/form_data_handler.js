const moment = require('moment')
const Habit = require('./habits');
const User = require('./users')




let user_handler = function(form) {
    let user = new User({
        userFirstName: form["f_name"],
        userLastName: form["l_name"],
        userEmail: form['email'],
        userPassword: form['password']
    })
    
    return [user, form['email']]

};



let form_handler = function(form, user_id) {
    let habit = new Habit({
        habitTitle: form["habit-title"],
        habitDescription: form["habit-desc"],
        habitReason: form["motivation-text"],
        timeSinceStart: moment(),
        userID: user_id

    })

    return habit


};




module.exports.form_handler = form_handler
module.exports.user_handler = user_handler;