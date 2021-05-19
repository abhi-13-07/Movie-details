import React, { useContext } from 'react';
import MovieCard from './MovieCard';
import { MovieContext } from '../MoviesProvider';
import Spinner from './Spinner';

const Movies = () => {
	const { movies } = useContext(MovieContext);
	const { data, loading, error } = movies;
	const canRender = !loading && !error && data?.Search?.length > 0;

	return (
		<section className="mt-5">
			<p className="text-center">Search Results</p>
			<div className="row">
				{loading && <Spinner />}
				{canRender ? (
					data.Search.map((movie, index) => (
						<MovieCard key={index} movie={movie} />
					))
				) : (
					<div>
						<h5 className="text-secondary text-center">
							Your Search Results will appear here.
						</h5>
					</div>
				)}
				{error && (
					<h3 className="text-danger text-center">No Results Found!</h3>
				)}
			</div>
		</section>
	);
};

export default Movies;
