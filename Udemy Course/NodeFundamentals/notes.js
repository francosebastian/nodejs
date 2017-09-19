console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () =>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
  fs.writeFile('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title, body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicatesNotes = notes.filter((note => note.title === title));
    if (duplicatesNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note', title);
};

var removeNote = () => (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>note.title !==title );
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};

