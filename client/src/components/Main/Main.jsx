import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Main.css';
import Character from '../Character/Character';
import { useDispatch } from 'react-redux';
import { filterAncestry, getAllChars } from '../../redux/actions';

const Main = () => {
	const dispatch = useDispatch();

	const characters = useSelector((state) => state.characters);

	function handleOnChange(e) {
		console.log('ancestry', e.target.value);
		e.preventDefault();
		// if (e.target.value === '') return dispatch(getAllChars());
		dispatch(filterAncestry(e.target.value));
	}
	return (
		<div className="contenedor-card">
			<div>
				<select onChange={(e) => handleOnChange(e)}>
					<option value={'All'}>Todos</option>
					<option value={'half-blood'}>half-blood</option>
					<option value={'muggleborn'}>muggleborn</option>
					<option value={'pure-blood'}>pure-blood</option>
					<option value={'No tiene ancestro'}>No tiene ancestro</option>
					<option value={'squib'}>squib</option>
				</select>
				{
					characters.length > 0 ? characters.map((pj) => (
						<Character
							name={pj.name}
							actor={pj.actor}
							house={pj.id}
							ancestry={pj.ancestry}
							image={pj.image}
							key={pj.id}
						/>
					)) :
					<div>Loading...</div>}
			</div>
		</div>
	);
};

export default Main;
