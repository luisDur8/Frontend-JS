const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;

    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("img/pokeball-error.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let pokeNom = data.name;
            pokeDataName = document.getElementById("pokeN");
            pokeDataName.textContent = `nombre: ${pokeNom}`;

            let pokeTy = data.types[0].type.name;
            pokeDataTy = document.getElementById("pokeT");
            pokeDataTy.textContent = `tipo: ${pokeTy}`; 
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

