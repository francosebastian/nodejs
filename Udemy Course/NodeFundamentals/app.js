console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js');

console.log('Result:', notes.add(9,-2));

//console.log(_.isString(true));
//console.log(_.isString("Franco"));

var filteredArray = _.uniq(['Andrew',1,'Andrew',1,2,3,4]);
console.log(filteredArray);
/*
var user = os.userInfo();


fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`, function(err){
    if(err){
        console.log('unable to write to file')
    }
});
*/