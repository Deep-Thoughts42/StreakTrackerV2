

const express = require("express");
const Habit = require("./models/habits");
let User = require("./models/users");
  app = express();
  port = process.env.PORT || 5000;
  cors = require("cors");
  mongoose = require('mongoose');
  // Schema = mongoose.Schema;
  moment = require('moment');
  form_data_handler = require("./models/form_data_handler");
  



// connecting to mongodb


app.use(cors());
app.use(express.json());
app.listen(port, () => console.log("Backend server live on " + port));

const dbURI = 'mongodb+srv://VedaantV:VedaantV@cluster0.sg9cn.mongodb.net/streak-tracker?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log("Connected to db1"))
    .catch((err) => console.log(err))



app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});

app.get('/habit-create', (req, res) => {
  const habit = new Habit({
    habitTitle: "Test a database out Version 2 Electric Boogaloo",
    habitDescription: "Test entry.",
    habitReason: "Why? Why not?",
    timeSinceStart: moment()
  })

  habit.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })

 
  
});


app.post("/habit-form", (req, res) => {
  // console.log(req.body)
  let request_data = req.body
  let data = request_data[0]
  let user_id = request_data[1]
  let habit = form_data_handler.form_handler(data, user_id)

  habit.save()
    .then((result) => {
      console.log("success")
    })
    .catch((err) => {
      console.log(err)
    })

});

// Note that I am also able to send React data even when it is posting to deliver either a confirmation or a denial
app.post("/register", (req, res) => {
  let data = req.body
  let user_data = form_data_handler.user_handler(data)
  let user = user_data[0]
  let email = user_data[1]

  User.find({"userEmail": String(email)})
  .then((result) =>{
    // console.log(result.length)
    if (result.length > 0) {
      res.send([false, null])
     
    }
    else {
      
      user.save()
      .then((result) => {
        console.log("success")
        // console.log(email)
        res.send([true, email])
      })
      .catch((err) => {
        console.log(err)
      });

    }
      
  })
  .catch((err) => {
    console.log(err)
  });



}); 

app.post("/login", (req, res) => {
  let data = req.body
  let email = data["email"]
  let password = data["password"]

  User.find({"userEmail": String(email)})
    .then((result) => {
      let user_info = result[0]

      let user_password =  user_info["userPassword"]
      
      if (String(password) === String(user_password)) {
        // console.log(user_info)
        res.send([true, String(email)])

      }
      else {
        res.send([false, "Your password is incorrect"])

      }

    })
    .catch((err) => {
      // Here I need to say that
      res.send([false, "Your e-mail is not in the database, please try again"])
      
    })



});


app.get("/view-habits", (req, res, next) => {

  let user_info = req.query
  let user_id = user_info["userID"]

  Habit.find({"userID" : String(user_id)})
    .then((result) => {
        res.send(result)


    })
    .catch((err) => {
      console.log(err)

    })



})

app.post("/view-habits", (req, res) => {
  let data = req.body;
  let id = data[0]
  let status = data[1]

  if (status === "delete") {
  Habit.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Successfully Deleted")
    }

  })

  }


});



// habit.save()
//   .then((result) => {
//       console.log(result)
//   })
//   .catch((err) => {
//       console.log(err)
//   });