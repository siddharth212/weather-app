const express = require('express');
const app = express();

//middleware

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}))
//import route

const weatherRoute = require('./routes/weather');

//use view Engine
app.set('view engine', 'ejs');


//Middleware route

app.use('/', weatherRoute);


const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=> console.log(`server starting at port ${PORT}`));











