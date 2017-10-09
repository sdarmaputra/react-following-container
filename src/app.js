import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';

import './app.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Instruction from './components/Instruction';
import MediumLikeActions from './pages/MediumLikeActions';
import SocialButtonActions from './pages/SocialButtonActions';
import SocialButtonActions2 from './pages/SocialButtonActions2';

const App = (props) => {
	return (
		<Router>
			<div>
				<Instruction />
				<Header title='React Following Container' />
				<div className='navigation'>
					<a href='https://github.com/sdarmaputra/react-following-container' className='navigation__item'>
						<i className='lnr lnr-home'></i>
					</a>
					<NavLink exact to='/' className='navigation__item' activeClassName='navigation__item navigation__item--active'>Medium-like Actions</NavLink>
					<NavLink to='/social-buttons' className='navigation__item' activeClassName='navigation__item navigation__item--active'>Social Buttons</NavLink>
					<NavLink to='/social-buttons-2' className='navigation__item' activeClassName='navigation__item navigation__item--active'>Social Buttons (2)</NavLink>
				</div>

				<Route exact path='/' component={MediumLikeActions} />
				<Route path='/social-buttons' component={SocialButtonActions} />
				<Route path='/social-buttons-2' component={SocialButtonActions2} />
				<Footer />
			</div>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));

