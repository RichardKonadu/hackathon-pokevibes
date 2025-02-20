class PokemonApi {
  constructor() {
    this.baseURL = "https://pokeapi.co/api/v2/pokemon";
  }
  async getPokemon() {
    const number = Math.floor(Math.random() * 898) + 1;
    try {
      const response = await axios.get(`${this.baseURL}/${number}`);
      return response.data;
    } catch (error) {
      console.error("error fetching pokemon", error);
    }
  }

  async getIndividualPokemon(pokemonName) {
    try {
      const response = await axios.get(`${this.baseURL}/${pokemonName}`);
      return response.data;
    } catch (error) {
      console.error("error fetching pokemon", error);
    }
  }
}

const api = new PokemonApi();

const createPokemonImage = async () => {
  const pokemon = await api.getPokemon();
  console.log(pokemon);

  if (pokemon) {
    const pokemonImgContainer = document.querySelector(
      ".pokemon__image-container"
    );

    pokemonImgContainer.innerHTML = "";

    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.sprites.front_default;

    pokemonImage.classList.add("pokemon__image");

    pokemonImgContainer.appendChild(pokemonImage);
  }
};

const pokemonButton = document.querySelector(".pokemon__random-btn");

pokemonButton.addEventListener("click", (event) => {
  createPokemonImage();
});

let pokemonScores = { bulbasaur: 0, charmander: 0, squirtle: 0 };

const charmanderButtons = document.querySelectorAll(
  ".answer__btn.answer__btn--charmander"
);

charmanderButtons.forEach((charmanderButton) => {
  charmanderButton.addEventListener("click", () => {
    pokemonScores.charmander++;
    console.log(pokemonScores);
  });
});

const bulbasaurButtons = document.querySelectorAll(
  ".answer__btn.answer__btn--bulbasaur"
);

bulbasaurButtons.forEach((bulbasaurButton) => {
  bulbasaurButton.addEventListener("click", () => {
    pokemonScores.bulbasaur++;
    console.log(pokemonScores);
  });
});

const squirtleButtons = document.querySelectorAll(
  ".answer__btn.answer__btn--squirtle"
);

squirtleButtons.forEach((squirtleButton) => {
  squirtleButton.addEventListener("click", () => {
    pokemonScores.squirtle++;
    console.log(pokemonScores);
  });
});

const finishQuiz = document.querySelector(
  ".answer__btn.answer__btn--submission"
);

finishQuiz.addEventListener("click", () => {
  scoretest();
});

const scoretest = async () => {
  const starterPokemonContainer = document.querySelector(".starter__pokemon");
  const starterPokemonImgcontainer = document.querySelector(
    ".starter__pokemon--img--container"
  );
  starterPokemonImgcontainer.innerHTML = "";
  const pokemonName = document.querySelector(".starter__pokemon__name");

  if (
    pokemonScores.charmander > pokemonScores.bulbasaur &&
    pokemonScores.charmander > pokemonScores.squirtle
  ) {
    const response = await api.getIndividualPokemon("charmander");
    const pokemonNameEl = document.createElement("h3");
    const imageEl = document.createElement("img");
    imageEl.classList.add("starter__pokemon--img");
    pokemonNameEl.classList.add("starter__pokemon--name");
    imageEl.src = response.sprites.front_default;
    pokemonNameEl.innerText = "Charmander";

    starterPokemonContainer.appendChild(pokemonNameEl);
    starterPokemonImgcontainer.appendChild(imageEl);
  } else if (
    pokemonScores.bulbasaur > pokemonScores.charmander &&
    pokemonScores.bulbasaur > pokemonScores.squirtle
  ) {
    const response = await api.getIndividualPokemon("Bulbasaur");
    const pokemonNameEl = document.createElement("h3");
    const imageEl = document.createElement("img");
    imageEl.classList.add("starter__pokemon--img");
    pokemonNameEl.classList.add("starter__pokemon--name");
    imageEl.src = response.sprites.front_default;
    pokemonNameEl.innerText = "Bulbasaur";

    starterPokemonContainer.appendChild(pokemonNameEl);
    starterPokemonImgcontainer.appendChild(imageEl);
  } else if (
    pokemonScores.squirtle > pokemonScores.charmander &&
    pokemonScores.squirtle > pokemonScores.bulbasaur
  ) {
    const response = await api.getIndividualPokemon("Squirtle");
    const pokemonNameEl = document.createElement("h3");
    const imageEl = document.createElement("img");
    imageEl.classList.add("starter__pokemon--img");
    pokemonNameEl.classList.add("starter__pokemon--name");
    imageEl.src = response.sprites.front_default;
    pokemonNameEl.innerText = "Squirtle";

    starterPokemonContainer.appendChild(pokemonNameEl);
    starterPokemonImgcontainer.appendChild(imageEl);
  }
};
