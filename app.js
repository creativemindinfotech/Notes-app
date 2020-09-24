const yargs = require('yargs')
const { argv } = require('yargs')
const notes = require('./notes.js')
//console.log(process.argv)

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe:'adds a new note',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function () {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Ankit removes a note', argv)
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    handler: function () {
        console.log('Ankit reads a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'listing  note',
    handler: function () {
        console.log('Ankit listss all note')
    }
})



console.log(yargs.argv)