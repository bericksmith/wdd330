// let url = "https://pokeapi.co/api/v2/pokemon";

//fetch(url)
//    .then(response => response.json())
//    .then(data => {
//       console.log('General Pokemon List:', data);
//        console.log('Total count of Pokemon:', data.count);
//        console.log('Number of Pokemon records returned by default:', data.results.length);
//   })
//    .catch(error => {
//        console.error('Error fetching data:', error);
//   });



let url = "https://pokeapi.co/api/v2/pokemon";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('General Pokemon List:', data);

        document.body.innerHTML += `<p>Total count of Pokemon: ${data.count}</p>`;
        document.body.innerHTML += `<p>Number of Pokemon records returned by default: ${data.results.length}</p>`;

        let pokemons = data.results;
        document.body.innerHTML += "<h3>List of Pokémon:</h3><ul>";
        pokemons.forEach(pokemon => {
            document.body.innerHTML += `<li>${pokemon.name}</li>`;
        });
        document.body.innerHTML += "</ul>";
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.body.innerHTML += `<p>Error fetching data: ${error}</p>`;
    });
