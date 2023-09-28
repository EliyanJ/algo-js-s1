class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    attackPokemon(pokemon){
        pokemon.hp -= this.attack
        
    }
    defensePokemon(pokemon){
        pokemon.hp += this.defense
    }
    
    

}
let PokemonFeu = new Pokemon("feuo", 100, 30, 450, 0.7)
console.log(PokemonFeu)
let PokemonGlace = new Pokemon("glaco",70, 50, 520, 0.8)
console.log(PokemonGlace)
let luck1 = 0
let luck2 = 0

while(PokemonFeu.hp > 0 && PokemonGlace.hp > 0){
    /* ici mettre une variable aléatoire pour chaque pokemon */
    Pokemonluck1 = Math.random()
    Pokemonluck2 = Math.random()
    if (Pokemonluck1 > PokemonFeu.luck ){
        console.log("Feuo n'a pas pu jouer :(")
    }
    if (Pokemonluck1 <= PokemonFeu.luck ){
        console.log("Yes à moi de jouer'Feuo'")
        PokemonFeu.attackPokemon(PokemonGlace)
        PokemonFeu.defensePokemon(PokemonFeu)
        

    }
    console.log("il reste ", PokemonGlace.hp, "hp a pokemon Glace")
    if (PokemonGlace.hp<= 0){
        console.log("Pokemon Feu a gagné")
        console.log("Tu n'as pas survécu", PokemonGlace.name, "!")
        break
    }
    

    if (Pokemonluck2 > PokemonGlace.luck ){
        console.log("Glaco n'a pas pu jouer :(")
    }
    if (Pokemonluck2 <= PokemonGlace.luck ){
        console.log("Yes à moi de jouer'Glaco'")
        PokemonGlace.attackPokemon(PokemonFeu)
        PokemonGlace.defensePokemon(PokemonGlace)
        
    }
    console.log("il reste ", PokemonFeu.hp, "hp a pokemon feu")
    if (PokemonFeu.hp<= 0){
        console.log("Pokemon Glace a gagné")
        console.log("Tu n'as pas survécu", PokemonFeu.name, "!")
        break
    }

}


/* créer une classe pokemon => fonction qui permet d'attaquer */