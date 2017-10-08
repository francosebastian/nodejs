'use strict'

var moongose = require('mongoose'),
    Course = moongose.model('Course');

exports.list_all_courses = function (req, res) {
    Course.find({}, function (err, course) {
        if (err)
            res.send(err);
        res.json(course);
    });
};

exports.create_a_course = function (req, res) {
    var new_course = new Course(req.body);
    new_course.save(function (err, course) {
        if (err)
            res.send(err);
        res.json(course);
    });
};

exports.read_a_course = function (req, res) {
    Course.findById(req.params.course_id, function (err, course) {
        if (err)
            res.send(err);
        res.json(course);
    });
};

exports.update_a_course = function (req, res) {
    Course.findOneAndUpdate({_id: req.params.course_id}, req.body, {new: true}, function (err, course) {
        if(err)
            res.send(err);
        res.json(course);
    });
};

exports.delete_a_course = function(err, res){
    Course.remove({_id:req.params.course_id},function (err,course){
        if(err)
            res.send(err);
        res.json({message:'Curso eliminado correctamente'})
    });
};


