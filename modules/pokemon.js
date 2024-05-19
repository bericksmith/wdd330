let url = "https://pokeapi.co/api/v2/pokemon";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('General Pokemon List:', data);
        let content = `<div class="stats">
                           <p>Total count of Pokemon: ${data.count}</p>
                           <p>Number of Pokemon records returned by default: ${data.results.length}</p>
                       </div>
                       <h3>List of Pokémon:</h3><ul>`;
        data.results.forEach(pokemon => {
            content += `<li>${pokemon.name}</li>`;
        });
        content += "</ul>";
        document.getElementById('pokemonData').innerHTML = content;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('pokemonData').innerHTML = `<p class="error">Error fetching data: ${error}</p>`;
    });