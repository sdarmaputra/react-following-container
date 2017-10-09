import React from 'react';
import './header.scss';

const Header = (props) => (
	<div className='header'>
		<div className='header__title'>
			{ props.title }
		</div>
	</div>
);

export default Header;
