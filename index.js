const models = require('./models');

// FINDING AND UPDATING ENTRIES

models.User.findAll().then((results) => {
  results.forEach((result) => {
    // *** GOOD LOOKING PRINTING ***
    // console.log("================");
    // console.log(result.name);
    // console.log(result.email);
    // console.log(result.bio);

    result.bio = '';
    result.save();
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
