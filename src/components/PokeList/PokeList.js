import React from 'react';
import './PokeList.css';

const PokeList = ({pokemons, addPokemon}) => {

	return (
		<div>
			{
				pokemons.map((pokemon, index) => {
					return (
						<span key={index}>
							<img 
								alt={pokemons[index].name}
								onClick={() => addPokemon(pokemons[index])}
								style={{cursor: 'pointer'}} 
								className="pokelist2" 
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[index].url.substring(34, pokemons[index].url.length-1)}.png`}
								width="70px" height="70px" 
							/>
						</span>
					)
				})
			}
		</div>
	);
}

export default PokeList;