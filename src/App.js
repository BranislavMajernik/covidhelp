import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './logo.svg';
import './App.css';
import About from './components/About';
import Result1 from './components/Result1';
import Result2 from './components/Result2';
import Menu from './components/Menu';
import MenuCard from './components/MenuCard';
import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu/>
					<Switch>
						<Route exact path='/' render={
							props =>
							<div>
								<Header />
								<MenuCard />
                
							</div>
							} />
						<Route exact path='/about' component={About} />
						<Route exact path='/result1' component={Result1} />
						<Route exact path='/result2' component={Result2} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;