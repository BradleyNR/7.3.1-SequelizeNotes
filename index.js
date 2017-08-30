const models = require('./models');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('sequelize');

//app
const app = express();
//views
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




app.get('/', (req, res) => {
  models.User.findAll(
    //below, ordering by the updatedAt col (required in sequelize)
    {order: sequelize.col('updatedAt')}
  ).then((results) =>{
    res.render('index', {model: results});
  });
});

app.get('/users/:id', (req, res) => {
  models.User.findById(req.params.id).then((result) => {
    res.render('detail', {model: result});
  });
});

app.listen(3000);
