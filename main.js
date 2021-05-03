const display_phonetics = require('./display_phonetics');

//first two elements in the argv array are ignored
display_phonetics(process.argv.slice(2));