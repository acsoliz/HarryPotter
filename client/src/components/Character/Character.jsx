import React from 'react';

export default function Character({ name, actor, id, house, ancestry, image }) {
	return (
		<div className="contenedor-card">
			<h2 key={id}>{name}</h2>
			<span>{actor}</span>
			<span>{ancestry}</span>
			<span>{house}</span>
			<img src={image} width="160" height="280" alt=" " />
		</div>
	);
}
