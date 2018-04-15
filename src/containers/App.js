import React, { Component } from 'react';
import './App.css';
import PokeLineUp from '../components/PokeLineUp/PokeLineUp.js';
import PokeData from '../components/PokeData/PokeData.js';
import PokeDex from '../components/PokeDex/PokeDex.js';
import pokeball from './pokeball.png';

const initialState = {
	img: pokeball,
	url: '',
	name: '',
	type: '',
	abilities:'',
	attack: 0,
	defense: 0,
	hp: 0
}

class App extends Component {

	constructor() {
		super();
		this.state = {
			pokemons: [],
			searchfield: '',
			poke1: initialState,
			poke2: initialState,
			poke3: initialState,
			poke4: initialState,
			poke5: initialState,
			poke6: initialState,
			name: '',
			type: '',
			abilities: '',
			attack: 0,
			defense: 0,
			hp: 0
		}
	}

	componentDidMount(){
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=892')
		.then(response => response.json())
		.then(data => this.setState({pokemons: data.results}))
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	addPokemon = (pokemon) => {
		var id = pokemon.url.substring(34, pokemon.url.length-1);
		fetch(pokemon.url)
		.then(response => response.json())
		.then(data => {
			this.setState({poke1: {
				img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
				url: pokemon.url,
				name: pokemon.name,
				type: this.addType(data.types),
				abilities: this.addAbilities(data.abilities),
				attack: data.stats[4].base_stat,
				defense: data.stats[3].base_stat,
				hp: data.stats[5].base_stat
			}})
		})
	
		this.setState({poke2: this.state.poke1})
		this.setState({poke3: this.state.poke2})
		this.setState({poke4: this.state.poke3})
		this.setState({poke5: this.state.poke4})
		this.setState({poke6: this.state.poke5})
	}

	addType = (data) => {
		var types = "";

		for(var i = 0; i < data.length; i++) {
			var typeName = data[i].type.name
			var typeFinal = typeName.charAt(0).toUpperCase() + typeName.substring(1, typeName.length)

			if(i === data.length-1){
				types = types + typeFinal
			} else {
				types = types + typeFinal + ", "
			}
		}
		return types;
	}

	addAbilities = (data) => {
		var abilities = "";
		for(var i = 0; i < data.length; i++) {
			var abilityName = data[i].ability.name
			var abilityFinal = abilityName.charAt(0).toUpperCase() + abilityName.substring(1, abilityName.length)

			if(i === data.length-1){
				abilities = abilities + abilityFinal
			} else {
				abilities = abilities + abilityFinal + ", "
			}
		}
		return abilities;
	}

	showPokemonData = (pokemon) => {
		this.setState({name: pokemon.name})
		this.setState({type: pokemon.type})
		this.setState({abilities: pokemon.abilities})
		this.setState({attack: pokemon.attack})
		this.setState({defense: pokemon.defense})
		this.setState({hp: pokemon.hp})
	}

  	render() {	
  		const {pokemons, searchfield, poke1, poke2, poke3, poke4, poke5, poke6, name, type, abilities, attack, defense, hp} = this.state;
  		const filteredPokemons = pokemons.filter(pokemon => {
  			return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
  		})

	    return (
	      	<div className="App">
		        <PokeLineUp 
		        	showPokemonData={this.showPokemonData} 
		        	poke1={poke1} 
		        	poke2={poke2} 
		        	poke3={poke3} 
		        	poke4={poke4} 
		        	poke5={poke5} 
		        	poke6={poke6}
		        />
		        <PokeData 
		        	name={name} 
		        	type={type} 
		        	abilities={abilities} 
		        	attack={attack} 
		        	defense={defense} 
		        	hp={hp}
		        />
		        <PokeDex 
		        	addPokemon={this.addPokemon} 
		        	onSearchChange={this.onSearchChange}
		        	pokemons={filteredPokemons} 
		        />
	      	</div>
	    );
 	}
}

export default App;
