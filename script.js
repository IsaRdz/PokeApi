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
};
getPokemones();

const cardsContainer = document.getElementById("cards-container");
let body = ``;

const showPokemones = (arrayPokemones) => {
  const pokemones = arrayPokemones.map((pokemon) => {
    console.log("ID: ", pokemon.id);
    console.log("Name: ", pokemon.name);
    console.log("sprites", pokemon.sprites);

    return (body += `
            <div class="pokemon-card">
            <h2>${pokemon.name}</h2>
            <p>ID: ${pokemon.id}</p>
            <div class="slide-container"> 
                <div class="slide fade">
                    <img src="${pokemon.sprites.front_default}" alt="front_default"></img>
                </div>
                <div class="slide fade">
                    <img src="${pokemon.sprites.back_default}" alt="back_default"></img>
                </div>
                <div class="slide fade">
                    <img src="${pokemon.sprites.front_shiny}" alt="front_shiny"></img>
                </div>
                <div class="slide fade">
                    <img src="${pokemon.sprites.back_shiny}" alt="back_shiny"></img>
                </div>

                <a class="prev" onClick="plusSlides(-1)"> < </a>
                <a class="next" onClick="plusSlides(1)"> > </a>
            </div>
            </div>
        `);
  });
  cardsContainer.innerHTML = body;
};

let slideIndex = 1;
showSlides(slideIndex); 

function plusSlides(n){
  showSlides(slideIndex += n);
}

function showSlides(n){
  let i;
  let slides = document.getElementById("slide");
  if(n > slides.length){
    slideIndex=1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for(i=0; i<slides.length;i++){
    slides[i].style.display="none"
  }
  slides[slideIndex-1].style.display = "block";
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow