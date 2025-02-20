const questions = [
  {
    question: "How do you handle challenges?",
    answers: ["Charge In", "Stay Calm", "Go With the Flow"],
  },
  {
    question: "Ideal way to spend a day off",
    answers: ["Catching A Tan", "Strolling through the woods", "Taking A Dip"],
  },
  {
    question: "Biggest Strength",
    answers: ["Determination", "Patience", "Adaptability"],
  },
  {
    question: "Pick a snack",
    answers: ["Spicy Chips", "Fresh Salad", "Juicy Watermelon"],
  },
  {
    question: "How do you make new friends",
    answers: ["Say Hi First", "Wait & Observe", "Crack a Joke"],
  },
];

// let pokemons = [];

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

// const answerButtons = document.querySelectorAll(".answer__btn");
// addEventListener("click");
// event listener - click
//  add scores

// if pokemonScores.Charmander > bulbasaur && squirtle
//  result charmander - print name and photo
// else if pokemonScores.bulbasaur > charmander && squirtle
//  result bulbasaur - print name and photo

const charmanderButton = document.querySelector(
  ".answer__btn.answer__btn--charmander"
);
const charmanderButton2 = document.querySelector(
  ".answer__btn.answer__btn--charmander2"
);
const charmanderButton3 = document.querySelector(
  ".answer__btn.answer__btn--charmander3"
);

charmanderButton.addEventListener("click", async () => {
  pokemonScores.charmander++;
  console.log(pokemonScores);
  //   const result = await api.getIndividualPokemon("charmander");
  //   console.log(result);
});

charmanderButton2.addEventListener("click", async () => {
  pokemonScores.charmander++;
  console.log(pokemonScores);
  //   const result = await api.getIndividualPokemon("charmander");
  //   console.log(result);
});

charmanderButton3.addEventListener("click", async () => {
  pokemonScores.charmander++;
  console.log(pokemonScores);
  //   const result = await api.getIndividualPokemon("charmander");
  //   console.log(result);
});

const bulbasaurButton = document.querySelector(
  ".answer__btn.answer__btn--bulbasaur"
);
bulbasaurButton.addEventListener("click", async () => {
  pokemonScores.bulbasaur++;
  console.log(pokemonScores);
});

// hide quiz answers 2
// when one of the first questions in answers, hide the first questions and show the second
// after second answers, make your API call

const squirtleButton = document.querySelector(
  ".answer__btn.answer__btn--squirtle"
);
squirtleButton.addEventListener("click", async () => {
  pokemonScores.squirtle++;
  console.log(pokemonScores);
});
