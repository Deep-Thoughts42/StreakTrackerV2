const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moment = require('moment')

let date = moment()

console.log(date)

// date = date.format("DD-MM-YYYY")

console.log(Date(date))

// console.log(moment('2016-11-23').fromNow(true))

const dbURI = ''

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log("Connected to db"))
    .catch((err) => console.log(err))
