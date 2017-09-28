'use strict'
var moongose = require('mongoose');
var Schema = moongose.Schema;

var ProfileSchema = new Schema({
    firstname: {
        type: 'String',
        required: 'Es necesario un nombre'
    },
    lastname: {
        type: 'String',
        required: 'Es necesario un Apellido'
    },
    email: {
        type: 'String',
        required: 'Es necesario un email'
    }
});

module.exports = moongose.model('Profile', ProfileSchema);




