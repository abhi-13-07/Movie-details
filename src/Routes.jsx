import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './Components/IndexPage';
import MoviePage from './Components/MoviePage';

const Routes = () => {
	return (
		<Router>
			<div className="container mt-3">
				<Switch>
					<Route exact path={'/'}>
						<IndexPage />
					</Route>
					<Route exact path={'/movie/:imdbID'}>
						<MoviePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Routes;
