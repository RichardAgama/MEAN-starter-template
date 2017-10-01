const mongoose = require('mongoose');
const Users = mongoose.model('testModel');
//                  name of model ^

const path = require('../../server.js');//requires the root path of your project
//--------------------------------------------------

module.exports.userSignUp = function(req, res){
  //console.log(path.root);
  res.sendFile(path.root+'/html/index.html');
};
//--------------------------------------------------
module.exports.usersGetAll = function(req, res){

  //mongodb find all users
  Users.find().exec(function(err, users){
    if(err)
    {
      res.status(500).json(err);
    }else{
      console.log('found ' + users.length + ' users');
      res.json(users);
    }

  });

};
//--------------------------------------------------
module.exports.usersGetOne = function(req, res){

  //var userId = req.params.userId;

  var userId = "59cef4137d0797984c30b8c6";//forced

  //finds one user account
  Users.findById(userId).exec(function(err, user){
    if(err){
      res.status(500).json(err);
    }else if(!user){
      res.status(404).json({"message": "user not found!"});
    }else{
      res.json(user);
    }
  });

};
//--------------------------------------------------
module.exports.addUser = function(req, res){

  //add one user account
  Users.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    bio: req.body.bio,
    pic: req.body.pic

  }, function(err, formData){
    if(err){
      res.status(400).json({"message": "creation error"});
    }else{
      res.status(201).json(formData);
    }
  });

};
//--------------------------------------------------
