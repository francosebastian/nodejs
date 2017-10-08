'use strict'
var moongose = require('mongoose');
var Schema = moongose.Schema;

var ProfileSchema = new Schema({
    profileName: {
        type: 'String',
        required: 'Es necesario un nombre'
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = moongose.model('Profile', ProfileSchema);




