async function getPokemon(poke){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`).then(data => data.json());
}

const inputs = document.getElementById('pokeName');
const answer = document.getElementById('answer');
const btnLook = document.getElementById('look');

inputs.addEventListener('input', (event) => {
    answer.innerHTML = inputs.value;
});

btnLook.addEventListener('click', (event) => {
    callPokemon(inputs.value)
    
    
})

async function callPokemon(poke){
    let pokemon;
    try{
        pokemon = await getPokemon(poke.toLowerCase())
    }catch(e){
        return answer.innerHTML = `<label style="font: red"> Este pokemon não foi encontrado ou foi escrito errado...</label>`
    }
    
    let pokepictures = await callPokePicture(pokemon.forms[0].url)

    drawPoke(pokemon, pokepictures)
}

async function callPokePicture(poke){
    let pokemon = await fetch(poke).then(data => data.json());
    pokeSprites = pokemon.sprites;
    return pokeSprites;
}

function drawPoke(poke, pokepicture){
    console.log(pokepicture)
    answer.innerHTML = `
    <h1>${poke.name}</h1>
    <img src=${pokepicture.front_default} width=500 height=500></img>
    `
}