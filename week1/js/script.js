document.addEventListener("DOMContentLoaded", function() {
  fetch('https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json')
    .then(response => response.json())
    .then(prophetData => {
      const prophetTemplate = document.getElementById("prophet-card");
      const prophetCardsContainer = document.getElementById("prophet-cards");

      prophetData.prophets.forEach(prophet => {
        const prophetCard = prophetTemplate.content.cloneNode(true);

        prophetCard.querySelector("h2").textContent = `${prophet.name} ${prophet.lastname}`;
        prophetCard.querySelector("p:nth-of-type(1)").textContent = `Birth Date: ${prophet.birthdate}`;
        prophetCard.querySelector("p:nth-of-type(2)").textContent = `Birth Place: ${prophet.birthplace}`;
        prophetCard.querySelector(".profile").src = prophet.imageurl;
        prophetCard.querySelector(".profile").alt = `${prophet.name} ${prophet.lastname}`;
        prophetCardsContainer.appendChild(prophetCard);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});