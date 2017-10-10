import React from 'react';
import './card.scss';

const Card = (props) => (
	<div className='card'>
		<div className='card__title'>{ props.title }</div>
		<div className='card__content' dangerouslySetInnerHTML={{ __html: props.content}} />
	</div>
);

export default Card;
