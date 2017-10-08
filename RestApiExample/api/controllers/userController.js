'use strict'

var moongose = require('mongoose'),
    User = moongose.model('User');

exports.list_all_profiles = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.read_a_user = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update_a_user = function (req, res) {
    User.findOneAndUpdate({_id: req.params.user_id}, req.body, {new: true}, function (err, user) {
        if(err)
            res.send(err);
        res.json(user);
    });
};

exports.delete_a_user = function(err, res){
    User.remove({_id:req.params.user_id},function (err,user){
        if(err)
            res.send(err);
        res.json({message:'Usuario eliminado correctamente'})
    });
};