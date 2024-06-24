let isntStarted = true;


async function getPokemon(poke){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`).then(data => data.json());
}

let inputs;
let answer;
let btnLook;



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
    `
}
const mainContainer = document.getElementById("mainContainer");

/*    Em desenvolvimento para o pós click.

mainContainer.addEventListener("click", (event) => {
    console.log(event)
    drawFirstPage();
})*/
const drawFirstPage = () => {
    if(isntStarted){
        isntStarted = false;
        mainContainer.innerHTML = `
        <div class="poke">
            <h1 id="answer"></h1>
            <div>
                <div class="foreground" id="pokeImg">

                </div>
                <img src="http://localhost:8082/image/garden" width="210px" height="210px" alt="Garden">
            </div>
            

        </div>
        <div class="inputs">
            <input type="text" id="pokeName">
            <button type="button" id="look">Look for Poké</button>
            <div class="input-btns">
                <button class="btnNumbers">
                    1
                </button>
                <button class="btnNumbers">
                    2
                </button>
                <button class="btnNumbers">
                    3
                </button>
                <button class="btnNumbers">
                    4
                </button>
                <button class="btnNumbers">
                    5
                </button>
                <button class="btnNumbers">
                    6
                </button>
                <button class="btnNumbers">
                    7
                </button>
                <button class="btnNumbers">
                    8
                </button>
                <button class="btnNumbers">
                    9
                </button>
                <button class="btnNumbers">
                    0
                </button>
            </div>
        </div>
        `
        startEvents();
    }
}

function startEvents(){
    inputs = document.getElementById('pokeName');
        answer = document.getElementById('answer');
        btnLook = document.getElementById('look');
        inputs.addEventListener('input', (event) => {
            answer.innerHTML = inputs.value;
        });
        
        btnLook.addEventListener('click', (event) => {
            callPokemon(inputs.value)
            
            
        })
}