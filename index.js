let info = [];
let delay = 2000;
const opciones = {
    id_asignatura: {
        alias: 'asig',
        demand: true
    },
    nombre_estudiante: {
        alias: 'nom',
        demand: true
    },
    documento_estudiante: {
        alias: 'doc',
        demand: true
    }
}


 info = [
    {
        id: 1,
        nombre: 'matematicas',
        duracion: '1 mes',
        valor: 100000
    },
    {
        id: 2,
        nombre: 'ingles',
        duracion: '1 mes',
        valor: 100000
    },
    {
        id: 3,
        nombre: 'fisica',
        duracion: '2 mes',
        valor: 500000
    }
]

const fs = require('fs');
const argv = require('yargs')
 .command('inscribir', 'Inscribase a un curso', opciones)
 .argv;

const printCourses = (obj, delay, callback) => {
    setTimeout(function () {
        callback(`El curso se llama: ${obj.nombre}, tiene asignado el id: ${obj.id}, su duración es de: ${obj.duracion} y tiene un costo de: ${obj.valor}.`)
    }, delay);
}

let generateFile = (curso, argv) => {

   let body = `El estudiante ${argv.nom} con identificacion ${argv.doc}, 
se prematriculo para el curso de ${curso.nombre} 
con el identificador ${curso.id},
la duración de dicho curso sera de ${curso.duracion}
y el valor es de ${curso.valor} pesos.`;

    fs.writeFile('inscripcion.txt', body, (err) => {
        if (err) throw (err);
        console.log('Se creo con exito el archivo');
    });
}

//Si no se ingreso un argumento se listan todos lo cursos

if (argvs.asig && argvs.nom && argvs.doc) {
   
    if (argv.asig === undefined) {
        for (let i = 0; i < let cursos = [];
let delay = 2000;
const opciones = {
    id_asignatura: {
        alias: 'asig',
        demand: true
    },
    nombre_estudiante: {
        alias: 'nom',
        demand: true
    },
    documento_estudiante: {
        alias: 'doc',
        demand: true
    }
}


 cursos = [
    {
        id: 1,
        nombre: 'matematicas',
        duracion: '1 mes',
        valor: 100000
    },
    {
        id: 2,
        nombre: 'ingles',
        duracion: '1 mes',
        valor: 100000
    },
    {
        id: 3,
        nombre: 'fisica',
        duracion: '2 mes',
        valor: 500000
    }
]

const fs = require('fs');
const argv = require('yargs')
 .command('inscribir', 'Inscribase a un curso', opciones)
 .argv;

const printCourses = (obj, delay, callback) => {
    setTimeout(function () {
        callback(`El curso se llama: ${obj.nombre}, tiene asignado el id: ${obj.id}, su duración es de: ${obj.duracion} y tiene un costo de: ${obj.valor}.`)
    }, delay);
}

let generateFile = (curso, argv) => {

   let body = `El estudiante ${argv.nom} con identificacion ${argv.doc}, 
se prematriculo para el curso de ${curso.nombre} 
con el identificador ${curso.id},
la duración de dicho curso sera de ${curso.duracion}
y el valor es de ${curso.valor} pesos.`;

    fs.writeFile('inscripcion.txt', body, (err) => {
        if (err) throw (err);
        console.log('Se creo con exito el archivo');
    });
}

//Si no se ingreso un argumento se listan todos lo cursos

if (argvs.asig && argvs.nom && argvs.doc) {
   
    if (argv.asig === undefined) {
        for (let i = 0; i < info.length; i++) {
            printCourses(info[i], delay, (resultado) => {
                console.log(resultado);
            });

            delay += 2000;
        
        }
    } else {
        //Se busca el id del curso
        let curso = info.find(obj => obj.id === argv.asig);
        //Si es indefinido
        if (curso != undefined) {
            //En caso contrario se escribe el archivo con la preinscripcion
            generateFile(curso, argv);
        } else {
            console.log('Se ingreso un id de asignatura incorrecto.')
        
        }
    }
}else{
    console.log('Los 3 parametros asig, nom, y doc son obligatorios')
}
.length; i++) {
            printCourses(info[i], delay, (resultado) => {
                console.log(resultado);
            });

            delay += 2000;
        
        }
    } else {
        //Se busca el id del curso
        let curso = info.find(obj => obj.id === argv.asig);
        //Si es indefinido
        if (curso != undefined) {
            //En caso contrario se escribe el archivo con la preinscripcion
            generateFile(curso, argv);
        } else {
            console.log('Se ingreso un id de asignatura incorrecto.')
        
        }
    }
}else{
    console.log('Los 3 parametros asig, nom, y doc son obligatorios')
}
