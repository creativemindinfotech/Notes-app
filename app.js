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
    handler() {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing  note',
    handler() {
        notes.listNotes()
    }
})



console.log(yargs.argv)