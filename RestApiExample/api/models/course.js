'use strict'
var moongose = require('mongoose');
var Schema = moongose.Schema;

var CourseSchema = new Schema({
        courseName: {
            type: 'String',
            required: 'Es necesario un nombre del curso'
        }
    },
    {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = moongose.model('Course', CourseSchema);
