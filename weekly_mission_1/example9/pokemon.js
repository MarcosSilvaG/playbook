class Pokemon {
	
    constructor(pokemonName) {
		this.pokemonName = pokemonName;
    }

    sayHello() {
        console.log(`My pokemon ${this.pokemonName} greets you!!`);
    }
	sayMessage(message) {
        console.log(`My pokemon ${this.pokemonName} says ${message}`);
	}
}

module.exports = Pokemon;
