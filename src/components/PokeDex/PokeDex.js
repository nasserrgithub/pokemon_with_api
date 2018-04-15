import React from 'react';
import './PokeDex.css';
import PokeList from '../PokeList/PokeList.js';

const PokeDex = ({pokemons, onSearchChange, addPokemon}) => {
	return (
		<div className="pokedex">
			<div className="test">
				<div className="titledex">
					Poke<span className="titledex2">dex</span>
				</div>
				<span className="titledex3">Search your pokemon, and click to add it in your lineup!</span> <br/>
				<input onChange={onSearchChange} className="searchbox" type="text" placeholder="Enter pokemon name"/>

				<div className="scroll">
					<PokeList addPokemon={addPokemon} pokemons={pokemons}/>
				</div>
			</div>
		</div>
	);
}

export default PokeDex;