

const express = require("express");
let User = require("./models/users");
  app = express();
  port = process.env.PORT || 5000;
  cors = require("cors");
  mongoose = require('mongoose');
  // Schema = mongoose.Schema;
  Habit = require('./models/habits');
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
  let data = req.body
  let habit = form_data_handler.form_handler(data)

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
    console.log(result.length)
    if (result.length > 0) {
      res.send([false, null])
     
    }
    else {
      
      user.save()
      .then((result) => {
        console.log("success")
        console.log(email)
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


  


  // console.log(data)


   

  

}); 




app.get("/view-habits", (req, res) => {
  Habit.find()
    .then((result) => {
      console.log(result)
      res.json(result)

    })
    .catch((err) =>{
      console.log(err)

    });

})




// habit.save()
//   .then((result) => {
//       console.log(result)
//   })
//   .catch((err) => {
//       console.log(err)
//   });