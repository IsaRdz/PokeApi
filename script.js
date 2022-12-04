const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemones = async () => {
  const arrayPokemones = [];
  for (let i = 1; i < 31; i++) {
    const URL = POKE_API_URL + i;
    const getFetch = await fetch(URL);
    const getPokemon = await getFetch.json();
    arrayPokemones.push(getPokemon);
  }
  showPokemones(arrayPokemones);
  displaySearch();
};
getPokemones();

const cardsContainer = document.getElementById("cards-container");
let body = ``;

const showPokemones = (arrayPokemones) => {
  const pokemones = arrayPokemones.map((pokemon) => {
    /*console.log("ID: ", pokemon.id);
    console.log("Name: ", pokemon.name);
    console.log("sprites", pokemon.sprites);*/

    return (body += `
          <div class="pokemon-card">
            <h2>${pokemon.name}</h2>
            <p>#${pokemon.id}</p>
            <div id="carouselExampleControls${pokemon.id}" class="carousel slide carousel-dark" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
               <img src="${pokemon.sprites.other.dream_world.front_default}" class="d-block w-75" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${pokemon.sprites.front_default}" class="d-block w-75" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${pokemon.sprites.back_default}" class="d-block w-75" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${pokemon.sprites.front_shiny}" class="d-block w-75" alt="...">
              </div>
              <div class="carousel-item">
              <img src="${pokemon.sprites.back_shiny}" class="d-block w-75" alt="...">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${pokemon.id}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${pokemon.id}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden"></span>
            </button>
          </div>
        </div>
        `);
  });
  cardsContainer.innerHTML = body;
};

const displaySearch = () =>{
  const inputSearch = document.getElementById("input-search");
  const listItems = document.querySelectorAll(".pokemon-card");
  
  console.log("listItems", listItems)
  
  inputSearch.addEventListener("keyup",(event) => {
    console.log(event.target.value);
  
    listItems.forEach((body) => {
      //console.log(body.textContent)
      
      try{  
        body.textContent.toLowerCase().includes(event.target.value.toLowerCase())
        ? body.classList.remove("hidden")
        : body.classList.add("hidden");

      }catch(e){
        console.log("Error: ", e.message)
      }
    })
  })
}

/*setTimeout( () =>{
 
},2000)*/


