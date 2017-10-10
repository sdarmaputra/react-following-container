import React from 'react';
import './actions.scss';

const Actions = (props) => (
	<div className='actions'>
	{
		props.actions.map((action, index) => {
			return (
				<a className='actions__item' key={index}>
					<i className={action.icon}></i>
				</a>
			);
		})
	}
	</div>
);

export default Actions;
