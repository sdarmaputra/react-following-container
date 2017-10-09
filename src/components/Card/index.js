import React from 'react';
import './card.scss';

const Card = (props) => (
	<div className='card'>
		<div className='card__title'>{ props.title }</div>
		<div className='card__content'>{ props.content } </div>
	</div>
);

export default Card;
