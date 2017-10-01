var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/testdb';//change db here

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected ' + dburl);

});

mongoose.connection.on('disconnected', function(){
  console.log('mongoose disconnected ');

});

mongoose.connection.on('error', function(err){
  console.log('mongoose error ' +  err);

});

process.on('SIGINT', function(){//handels contol C termination
  mongoose.connection.close(function(){
    console.log('mongoose disconnected through app termination (SIGINT)');
    process.exit(0);//exits process
  });
});

process.on('SIGTERM', function(){
  mongoose.connection.close(function(){
    console.log('mongoose disconnected through app termination (SIGTERM)');
    process.exit(0);//exits process
  });
});

process.once('SIGUSR2', function(){//handles nodemon restart
  mongoose.connection.close(function(){
    console.log('mongoose disconnected through app termination (SIGUSR2)');
    process.kill(process.pid, 'SIGUSR2');//stops the process, does not exit
  });
});

//bring in schema and models
require('./users.model.js');
