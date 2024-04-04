// importo 'Chalk' para poder colorear los casilleros.
/*const chalk = require('chalk');*/
import chalk from 'chalk';

var columnas = 8;
var filas = 8;
var cantDeRojos = 36;

// Imprimo la cantidad de casilleros Rojos.
console.log("Cantidad de casilleros Rojos " + cantDeRojos);

// Creando la función que verifica si el número de celdas Rojas cumple con la condición matemática para que se cumpla el objetivo del problema.
function verificarMetematicamente (columnas, cantDeRojos) {

    // Clacula el valor del límite inferior.
    let limite = 0;
    for (let i = 1; i <= columnas / 2; i++) {
        limite += i;
    };
    limite += columnas / 2;

    // Verifica que la cantidad de columnas y filas sean pares.
    if (columnas % 2 === 0) {
        // Verifica que la variable cantDeRojos supere el límite inferior.
        if (cantDeRojos > limite) {

                if (cantDeRojos === (columnas ** 2 / 2) + columnas / 2 || cantDeRojos === (columnas ** 2 / 2) - columnas / 2) {
                    console.log("La cantidad de casilleros Rojos sí verifica la condición matemática");
                } else {
                    console.log("La cantidad de casilleros Rojos no verifica la condición matemática");
                }
            } else {
                console.log("La cantidad de casilleros Rojos sí verífica la condición matemática, porque es menor al límte inferior.");
            };
        } else {
            console.log("La cantidad de columnas y filas debe ser la misma y deben ser pares.");
        };
};

// Llamo a la función que veifica la condición matemática.
verificarMetematicamente(columnas, cantDeRojos);

//--------------------------------------------------------------------------------------------------------------//
// COMPROBANDO LA VERACIDAD DE LA CONDICIÓN MATEMÁTICA.
//--------------------------------------------------------------------------------------------------------------//

// Función para crear el tablero de control y poblarlo con casilleros rojos y ordenarlos.
function crearTablero (columnas, filas, cantDeRojos) {
    // Creando un segurndo tablero de control
    var tableroControl = [];

    // Rellenando el tablero de control.
    for (let c = 0; c < columnas; c++){
        var columna = [];
        
        for (let f = 0; f < filas; f++){
            columna.push(f);
        }

        tableroControl.push(columna);
    }

    // Poblando los espacios del tablero den control con números
    var contador = 0;
    for (let c = 0; c < tableroControl.length; c++){

        for (let f = 0; f < tableroControl.length; f++){
            contador++;
            tableroControl[c][f] = contador;
        }
    }

    // Rellenando el tablero de control
    for (let c = 0; c < tableroControl.length; c++){

        for (let f = 0; f < tableroControl.length; f++){
            if(f <= c) {
                if(cantDeRojos > 0){
                    tableroControl[c][f] = "R";
                    cantDeRojos -= 1;
                }
            } else {
                tableroControl[c][f] = "A";
            };
        };

    };

    return tableroControl;
};

// Llamando a la función que crea el tablero de control y lo puebla con casilleros rojos.
let tableroControl = crearTablero(columnas, filas, cantDeRojos);

// Imprimiendo el tablero de control
console.log("-----------TABLERO DE CONTROL--------");
for (let c = 0; c < tableroControl.length; c++){
    
    var filaActual = " ";

    for (let f = 0; f < tableroControl.length; f++){
        if (tableroControl[c][f] == "R") {
            filaActual += chalk.red("[ " + tableroControl[c][f] + " ]");
        } else if (tableroControl[c][f] == "A") {
            filaActual += chalk.blue("[ " + tableroControl[c][f] + " ]");
        } else {
            filaActual += "[ " + tableroControl[c][f] + " ]";
        }
    };

    console.log(filaActual);
};

//-------------------------------------------------------------------------------------------------------------//
//Función para comprobar al veracidad de la condición matemática en el tablero de control.
function probarResultadoDelTablero (tableroControl){
    // Creo un mapa que contenga el número de columna y su respectiva cantidad de casilleros rojos
    let cantDeRojosControlMap = new Map ();
    // Creo un Set en el que voy agregando la cantidad de casilleros Rojos por cada columna, para verificar si en alguno de ellos se reptire el núemro.
    let cantDeRojosControl = new Set();

    // Creo la variable booleana apra determinar si hay columnas con la misma cantidad de celdas rojas.
    let hayColumnasConRojosRepetidos = false;

    // Contando la cantidad de casilleros Rojos en el tablero de control.
    for (let c = 0; c < tableroControl.length; c++){
        var rojoPorColumna = 0;

        for(let f = 0; f < tableroControl.length; f++){
            if(tableroControl[c][f] === "R"){
                rojoPorColumna ++;
            }
        };

        // Poblando el mapa con el número de columna y su correspondiente cantidad de casilleros rojos.
        cantDeRojosControlMap.set("Columna " + c, rojoPorColumna);

        // Veirficando si hay más de una columna con la misma cantidad de casilleros rojos.
        if (cantDeRojosControl.has(rojoPorColumna)) {
            hayColumnasConRojosRepetidos = true;
        } else {
            cantDeRojosControl.add(rojoPorColumna);
        }
    };

    // Creando la variable que muestra el mensaje de resultado.
    let mensajeDeResultado = "";

    // Determinando el contenido del mensaje de resultado.
    if (hayColumnasConRojosRepetidos) {
        mensajeDeResultado = "Hay columnas con la misma cantidad de celdas Rojas";
    } else {
        mensajeDeResultado = "Todas las columnas tienen distinta cantidad de celdas Rojas";
    };
    
    console.log(cantDeRojosControlMap);
    console.log(mensajeDeResultado);
};

// Llamando a la función que prueba el resultado del tablero de control.
probarResultadoDelTablero(tableroControl);