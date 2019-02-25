// console.log('Satrting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  //console.log('Adding note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter( note => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};


  // try {
  //   var noteString = fs.readFileSync('notes-data.json');
  //   notes = JSON.parse(noteString);
  // }catch( e ){
  //   console.log(e);
  // }

var getAll = () =>{
  //console.log('Getting all notes');
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};

var readNote = (title) => {
  console.log('reading note', title);
};

var removeNote = (title) => {
  // console.log('Removing note', title);
  
  // fetch notes
  var notes = fetchNotes();
  //  filter notes, removing the one with title of argument
  var filteredNotes = notes.filter(note => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  //debugger;
  // Break on this line and use repl to output note
  // Use read command with --title
  console.log('---');
  console.log('Title: ' + note.title);
  console.log('Body: ' + note.body);
}

module.exports = {
  addNote, // addNote: addNote simplifier with ES6
  getAll,
  readNote,
  removeNote,
  getNote,
  logNote 
};

//module.exports.age = 25;
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

//console.log(module);

// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.multiple = (a, b) => {
//   return a * b;
// };
