'use strict'
var moongose = require('mongoose');
var Schema = moongose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: 'String',
        required: 'Es necesario un nombre'
    },
    lastName: {
        type: 'String',
        required: 'Es necesario un Apellido'
    },
    email: {
        type: 'String',
        required: 'Es necesario un Email'
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = moongose.model('User', UserSchema);
