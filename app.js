
//const { argv } = require('process')

const {crearArchivo} =require('./helpers/multiplicar')
const argv = require('./config/yargs')



console.clear()

// console.log(process.argv)
// console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombrearchivo => console.log(nombrearchivo.rainbow, 'Creado'))
    .catch(err => console.log(err))
