import React from 'react';
import './instruction.scss';

const Instruction = (props) => (
	<div className='instruction'>
		<div className='instruction__text'>
			Scroll down to see the magic
		</div>
		<div className='instruction__icon'>
			<i className='lnr lnr-chevron-down'></i>
		</div>
	</div>
);

export default Instruction;
