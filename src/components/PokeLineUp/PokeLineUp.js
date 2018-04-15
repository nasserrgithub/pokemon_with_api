import React from 'react';
import './PokeLineUp.css';

const PokeLineUp = ({showPokemonData, poke1, poke2, poke3, poke4, poke5, poke6}) => {
	return (
		<div className="pokelineup">
			<div className="test">
				<div className="title1">
					Pokemon
				</div>
				<div className="title2">
					Lineup
				</div>
				<div className="list">
					<img onClick={() => showPokemonData(poke1)} className="pokelist" src={poke1.img} width="70px" height="70px" alt="poke1"/>
					<img onClick={() => showPokemonData(poke2)} className="pokelist" src={poke2.img} width="70px" height="70px" alt="poke2"/>
					<img onClick={() => showPokemonData(poke3)} className="pokelist" src={poke3.img} width="70px" height="70px" alt="poke3"/>
					<img onClick={() => showPokemonData(poke4)} className="pokelist" src={poke4.img} width="70px" height="70px" alt="poke4"/>
					<img onClick={() => showPokemonData(poke5)} className="pokelist" src={poke5.img} width="70px" height="70px" alt="poke5"/>
					<img onClick={() => showPokemonData(poke6)} className="pokelist" src={poke6.img} width="70px" height="70px" alt="poke6"/>
				</div>
			</div>
		</div>
	);
}

export default PokeLineUp;