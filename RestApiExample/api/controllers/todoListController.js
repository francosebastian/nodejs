'use strict'

var moongose = require('moongose'),
    Profile = moongose.model('Profiles');

exports.list_all_profiles = function (req, res) {
    Profile.find({}, function (err, profile) {
        if (err)
            res.send(err);
        res.json(profile);
    });
};

exports.create_a_profile = function (req, res) {
    var new_profile = new Profile(req.body);
    new_profile.save(function (err, profile) {
        if (err)
            res.send(err);
        res.json(profile);
    });
};

exports.read_a_profile = function (req, res) {
    Profile.findById(req.params.profileId, function (err, profile) {
        if (err)
            res.send(err);
        res.json(profile);
    });
};

exports.update_a_profile = function (req, res) {
    Profile.findOneAndUpdate({_id: req.params.profileId}, req.body, {new: true}, function (err, profile) {
        if(err)
            res.send(err);
        res.json(profile);
    });
};

exports.delete_a_profile = function(err, res){
    Profile.rmeove({_id:req.params.profileId},function (err,profile){
      if(err)
          res.send(err);
      res.json({message:'Perfil eliminado correctamente'})
    };
};


