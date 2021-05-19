import React from 'react';

const Navbar = () => {
	return (
		<header>
			<nav className="navbar navbar-dark bg-dark text-white p-3">
				<div className="container d-flex align-items-center justify-content-between">
					<h3>Movie Details</h3>
					<div>
						<strong>Details Provider: </strong>
						<a
							href="http://www.omdbapi.com/"
							className="text-warning"
							target="_blank"
							rel="noreferrer"
						>
							Details from OMDb.
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
