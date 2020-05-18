const mongoose = require('mongoose');
  module.exports = () => {
    mongoose.connect('mongodb://mamak:sadece0ben@ds159963.mlab.com:59963/heroku_chlb270m', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});    
      mongoose.connection.on('open', () => {
      });
        mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
  });
        
  mongoose.Promise = global.Promise;
};
