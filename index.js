const models = require('./models');


//FILTER BY CRITERIA
models.User.findAll({
    where: {bio: ''}
}).then((results) => {
  results.forEach((result) => {
    console.log("================");
    console.log(result.name);
    console.log(result.email);
    console.log(result.bio);
  })
});




//ADDED USERS TO DATABASE

// models.User.create({
//   name: 'Babadook',
//   email: 'spooky@scary.org',
//   bio: 'gimmme da book'
// });
//
// models.User.create({
//   name: 'vegeta',
//   email: 'saiyanprince@google.com',
//   bio: 'KAKAROT!!!'
// });
