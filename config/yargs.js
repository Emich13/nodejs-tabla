const { describe } = require('yargs');

const argv = require('yargs')
            .options({
                'b':{
                    alias: 'base',
                    demandOption: true,
                    type:'number',
                    describe: 'Es la base de la tabla de multiplicar'
                },
                'l':{
                    alias:'lista',
                    type:'boolean',
                    demandOption: false,
                    describe: 'Muestra la tabla en consola'
                },
                'h':{
                    alias:'hasta',
                    type:'number',
                    demandOption: false,
                    describe: 'Define el lìmite de la tabla'
                }
            })
            .check((argv,options)=>{
                if(isNaN(argv.b & argv.h)){
                    throw 'DEBE SER UN NÚMERO'
                }
                return true
            })
            .argv;

module.exports = argv