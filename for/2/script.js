/*2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.*/
// Get the user input.
const readline = require("readline");
const fetch = require("node-fetch");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número: ", async function(number) {
  const response = await fetch("https://pastebin.com/Zzk8g7Z6");
  const data = await response.json();

  console.log(`Nombres de Pokémons cuyos números son múltiplos de 5 hasta ${number}:`);

  for (let i = 1; i <= number; i++) {
    if (i % 5 === 0) {
      const pokemon = data.find(pokemon => pokemon.number === i);
      if (pokemon) {
        console.log(pokemon.name);
      }
    }
  }
  rl.close();
});
