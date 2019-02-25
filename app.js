//console.log('Starting app.js');

// const || var
// require is available in nodejs
// const os = require('os');    
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');


var titleOption = (describe, demand, alias) =>{
  describe,
  demand,
  alias
};
var bodyOption = (describe, demand, alias) =>{
  describe,
  demand,
  alias
};

//const argv = yargs.argv;
const argv = yargs
              .command('add', 'Add a new note',{
                title:titleOption('Title of note',true,'t'),
                body: bodyOption('Body of note', true, 'b')
                }   
              )
              .command('list', 'List all notes')
              .command('read', 'Read a note', {
                title:titleOption('Title of note',true,'t')
              })
              .help()
              .argv; 

//var command = process.argv[2];
var command = argv._[0];
//console.log('Command: ', command);
//console.log('Process: ',process.argv);
//console.log('Yargs: ',argv);

if(command === 'add'){
  //console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);

  if(note){
    console.log("Note created");
    notes.logNote(note);
  } else{
    console.log("Note title taken");
  }

}else if(command === 'list'){
  //console.log('listing all notes');
  var allNotes = notes.getAll();
  console.log('Printing '+allNotes.length+' note(s).');
  allNotes.forEach(note => notes.logNote(note));

}else if (command === 'read'){
  //console.log('Reading note');
  var note = notes.getNote(argv.title);
  if(note){
    console.log("Note found");
    notes.logNote(note);
  }else{
    console.log("Note not found");
  }
}else if(command === 'remove'){
  //console.log('Removing note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else{
  console.log('Command not recognized');
}


// var res = notes.addNote();
// console.log(res);

//var user = os.userInfo();
// console.log(user);

//fs.appendFile('greetings.txt','Hello ${user.username}!');
//fs.appendFile('greetings.txt','Hello '+ user.username +'! you are '+ notes.age+'.');

// console.log('Result add(9,-2) + : ', notes.add(9,-2));
// console.log('Result multiple(9,2) * : ', notes.multiple(9,2));

// console.log(_.isString(true));
// console.log(_.isString('Archytas'));
// console.log(_.isString(12));


// var filteredArray = _.uniq(['Salah',1,3,10,4,5,'Hamza','Hamza',10,1,3,3]);
// console.log(filteredArray);

