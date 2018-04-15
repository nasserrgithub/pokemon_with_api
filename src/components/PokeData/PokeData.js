import React from 'react';
import './PokeData.css'

const PokeData = ({name, type, abilities, attack, defense, hp}) => {
	return (
		<div className="pokedata">
			<div className="test">
				<div className="title1">
					Pokemon
				</div>
				
				<div className="title3">
					Data
				</div>

				<div className="info">
					<strong>NAME:</strong> <span className="name">{name}</span> <br/>
					<strong>TYPE: <span style={{color: 'indigo'}}>{type}</span> </strong><br/>
					<strong>ABILITIES: <span style={{color: 'maroon'}}>{abilities}</span></strong><br/>
					<strong>ATTACK: <span style={{color: 'blue'}}>{attack}</span></strong><br/>
					<strong>DEFENSE: <span style={{color: 'green'}}>{defense}</span></strong><br/>
					<strong>HP: <span style={{color: 'red'}}>{hp}</span></strong>
				</div>
			</div>
		</div>
	);
}

export default PokeData;