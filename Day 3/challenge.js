/*
Bikin 3 function untuk base fetch:

1. pakai lah return promise
2. fungsi kedua buatlah fungsi memanggil daftar Pokemon dari API yang ada di pokeapi.co
3. fungsi yang ketiga berguna untuk mengambil apa pun yang diperlukan dari pokeapi.co kecuali jenis Pokemon
*/

const fetch = require('node-fetch');
// Fungsi untuk memanggil daftar Pokemon dari API
async function getPokemonList() {​​
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return data.results;
}​​
// Fungsi untuk mengambil data Pokemon berdasarkan ID
async function getPokemonById(id) {​​
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${​​id}​​`);
  const data = await response.json();
  return data;
}​​
// Contoh penggunaan fungsi
getPokemonList()
  .then(results =>  {
    console.log(results);
  }​​)
  .catch(error => {
    console.error(error);
  }​​);
getPokemonById(25)
  .then(pokemon => {​​
    console.log(pokemon);
  }​​)
  .catch(error => {​​
    console.error(error);
  }​​);

