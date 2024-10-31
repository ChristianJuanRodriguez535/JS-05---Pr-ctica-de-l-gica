//& Ejercicio 1: User profile 

//* Write a program that prompts a user for their data: username,age, and a list of their favorite movies. Store the information and then showcase it in the console. 
//*Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.


function dataUsuario() {

    const nombreUsuario = prompt("Hola usuario, por favor ingresa tu nombre ");

    const edadUsuario =  prompt("Ahora, por favor ingresa tu nombre ");

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

//& Problema 2: Highest number 

//* Write a program that asks for 10 numbers. Using logical operators and any other JavaScript functions/structures you've seen before, determine an output the highst of those numbers