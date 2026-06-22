async function fetchData(){
    try{
        const pokemon = document.getElementById("pokemonName").value.toLowerCase();


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)


        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.getElementById("pokemonSprite")

    
        pokemonImg.src = pokemonSprite;
        pokemonImg.style.display = "block"

    }

    catch(e){
        console.error(e);
    }
}