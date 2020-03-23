const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes')
const HttpError = require("./models/http-error")
const app = express();

app.use(bodyParser.json());

app.use('/places', placesRoutes); 
app.use('/users', usersRoutes)
app.use((req,res,next)=>{
const error = new HttpError("Could not find this route", 404);
throw(error);
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});
mongoose
.connect('mongodb+srv://vbeaufil:Alain1996@cluster0-vvfpo.mongodb.net/mern?retryWrites=true&w=majority')
.then(()=>{app.listen(5000)})
.catch( err =>{
  console.log(err);
}
);
