import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { Title, Year, imdbID, Type, Poster } }) => {
	return (
		<div className="col-lg-6">
			<div>
				<div className="card mb-3" style={{ maxWidth: '550px' }}>
					<div className="row">
						<div className="col-md-4">
							<img className="img-small" src={Poster} alt={`${Title} Poster`} />
						</div>
						<div className="col-md-8 px-4">
							<div className="card-body">
								<h5 className="card-title">Name: {Title}</h5>
								<strong className="mt-3">Year: {Year}</strong>
								<p className="text-secondary mt=3">Type: {Type}</p>
							</div>
							<div className="px-3">
								<Link to={`/movie/${imdbID}`}>
									<button className="btn btn-dark">View Details</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
