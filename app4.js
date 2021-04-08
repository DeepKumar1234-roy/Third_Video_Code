const express = require('express');
const path = require('path');

//Init App
const app = express();

//Load View Engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
//Pass values to the templates or views
app.get('/',function(req, res){
  res.render('index2',{
    title:'Here we Pass the Value!!!'
  });
});

//Add Route
app.get('/articles/add', function(req, res){
  res.render('add_article',{
    title:'Add Articles'
  });
});

//Start Server
app.listen(3000, function(){
  console.log('Server Started on port 3000...')
});
