
//& Ejercicio 1: User profile 

//* Write a program that prompts a user for their data: username,age, and a list of their favorite movies. Store the information and then showcase it in the console. 
//*Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.


function dataUsuario() {

    const nombreUsuario = prompt("Hola usuario, por favor ingresa tu nombre ");

    const edadUsuario =  prompt("Ahora, por favor ingresa tu Edad ");

    const peliculasFavs = [];

    let añadirPelis = true;

    while (añadirPelis){

        const peli =  prompt("Ingresa tus peliculas favoritas");


        peliculasFavs.push(peli.trim());
        //&Agrega las peliculas al arreglo

        const masPelis = prompt ("Quieres agregar más peliculas ? Responde (si/no)");


        if (masPelis !=="si" && masPelis !=="SI" && masPelis !=="Si" &&masPelis !== "sI")  {
            añadirPelis = false;
        }
    
    console.log (`Nombre de usuario: ${nombreUsuario}`);

    console.log (`Nombre de usuario: ${edadUsuario}`);

    console.log (`Peliculas favoritas: ${nombreUsuario}`);

    peliculasFavs.forEach(peli => {
        console.log(`La pelicula ${peli} es de mis  favoritas`)
    })

    }

}

dataUsuario ();

//& Ejercicio 2: Highest number 

//* Write a program that asks for 10 numbers. Using logical operators and any other JavaScript functions/structures you've seen before, determine an output the highst of those numbers


numeroMasAlto();
function numeroMasAlto(){

    const numeros = [];
    for (let i = 0; i < 10; i++){
        
        //*ciclo par ingresar los 10   numeros de 1 en 1

        const numerosIngresados = parseFloat(prompt(`Ingresa 10 números de uno en uno por favor (${i + 1}):`));

        numeros.push(numerosIngresados); //&Almacena los números en el arreglo
    }

    let encontrarMasAlto = numeros[0]; // ?la variable encotrarMasAlto guarda al numero mas alto, comenzamos con el primer numero y comparamos con los demas elementos

    for( let i = 1; i < numeros.length; i++){

        if (numeros[i] > encontrarMasAlto){
            encontrarMasAlto = numeros[i];
        }
    }

    console.log(`El número más algo es: ${encontrarMasAlto}`);
}

//& Ejercicio 3:  Alarm

//*Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

//*Result example: "Time for bed after 10 seconds".
iniciarAlarma();

function iniciarAlarma(){

    let segundos = parseInt(prompt("¿Cuantos segundos faltan para la alarma"));

    let mensaje = prompt("¿Qué mensaje quieres mostrar cuando termine el tiempo?");

    if (isNaN(segundos)|| segundos <= 0){

        console.log("Por favor, ingresa un numero válido");
        return;
    }

    console.log(`La alarma comenzara en ${segundos} segundos `);

    let tiempoRestante = segundos; //& Bucle simple para contar los segundos 

    let temporizador = setInterval(() => {
        tiempoRestante--;//* se resta 1 seg al tiempo restante 

        if (tiempoRestante > 0 ){
            console.log(`Faltan ${tiempoRestante} segundos ...`);
        } else {
           
            //& Cuando el tiempo se acaba, se muestra el mensaje y se detiene el temporizador
            console.log(`Tiempo cumplido: ${mensaje}`);

            clearInterval(temporizador);
        }


    }, 1000); 

}