const url = 'https://pokeapi.co/api/v2/pokemon/';

function fetchData(url, data) {
  fetch(url)
    .then(response => response.json())
    .then(data)
    .catch(error);
}

fetchData(url, data);

function data(pokemonData) {
  const pokemon = pokemonData.results;
  const mainContainer = document.querySelector('[data-js="main"]');
  const pokemonList = document.createElement('ul');
  const heading = document.createElement('h1');

  heading.style.fontSize = '3rem';
  heading.style.textAlign = 'center';
  heading.textContent = 'Awesome Pokemon API';

  mainContainer.append(heading);

  pokemonList.setAttribute('role', 'list');

  pokemonList.className = 'pokemon-list';
  mainContainer.append(pokemonList);

  pokemon.forEach(eachPokemon => {
    fetchData(eachPokemon.url, pokemonDetails);

    function pokemonDetails(pokemonDetailsEach) {
      const pokemonCard = document.createElement('section');

      pokemonCard.innerHTML = `
   
     <img src="${pokemonDetailsEach.sprites.front_default}" />

     <dl>
      <h2> ${
        pokemonDetailsEach.name[0].toUpperCase() +
        pokemonDetailsEach.name.substring(1)
      }</h2>
       <dt>Height: ${pokemonDetailsEach.height}</dt>
       <dt>Weight: ${pokemonDetailsEach.weight}</dt>
    
      </dl>
      
      `;

      pokemonCard.className = 'pokemon-list__item ';
      pokemonList.append(pokemonCard);
    }
  });
}

function error(e) {
  document.body.innerText =
    'Sorry, Server Error. Please try again later. -' + e.message;
  console.log(e.message);
}
