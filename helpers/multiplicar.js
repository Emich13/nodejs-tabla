const fs = require('fs')
const colors = require('colors');



const crearArchivo = async (base = 5, lista=false, hasta= 10) => {

try {
    let nombrearchivo = `Tabla del ${base}`
    let impresion, consola ='';

    for (let index = 1; index <= hasta; index++) {
        impresion += `${base} X ${index} = ${base * index}\n`
        consola += `${base} ${'X'.dim} ${index} = ${base * index}\n`
    }
    if(lista){
        console.log('==============='.green)
        console.log(' ',nombrearchivo.bgGreen.black)
        console.log('==============='.green)
        console.log(consola.italic)
    }


    fs.writeFileSync(`./salida/${nombrearchivo}.txt`,impresion)

    
    return nombrearchivo

}

catch (error) {
throw error
}


}

module.exports = {crearArchivo}