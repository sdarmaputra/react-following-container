import React from 'react';
import './socialButtons.scss';

const SocialButtons = (props) => (
	<div className='social-buttons'>
	{
		props.actions.map((action, index) => {
			return (
				<a className={`social-buttons__item social-buttons__item--${action.type}`} key={index}>
					<i className={action.icon}></i>
				</a>
			);
		})
	}
	</div>
);

export default SocialButtons;
