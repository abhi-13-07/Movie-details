import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../MoviesProvider';
import Spinner from './Spinner';

const MoviePage = () => {
	const { imdbID } = useParams();
	const { query, movies } = useContext(MovieContext);
	const [queryParams, setQueryParams] = query;
	const { data, loading, error } = movies;

	console.log(queryParams);
	console.log(imdbID);

	useEffect(() => {
		setQueryParams({ s: '', y: '', i: imdbID });
	}, [imdbID, setQueryParams]);

	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				!error && (
					<div className="bg-white">
						<div className="row">
							<div className="col-lg-3">
								<img src={data?.Poster} alt="" />
							</div>
							<div className="col-lg-3">
								<div className="d-flex flex-column">
									<span>
										<strong>Name:</strong> {data?.Title}
									</span>
									<span>
										<strong>Year:</strong> {data?.Year}
									</span>
									<span>
										<strong>Runtime:</strong> {data?.Runtime}
									</span>
									<span>
										<strong>Director:</strong> {data?.Director}
									</span>
									<span>
										<strong>Writer:</strong> {data?.Writer}
									</span>
									<span>
										<strong>Actors:</strong> {data?.Actors}
									</span>
									<span>
										<strong>Plot:</strong> {data?.Plot}
									</span>
									<span>
										<strong>Language:</strong> {data?.Language}
									</span>
									<span>
										<strong>Country:</strong> {data?.Country}
									</span>
									<span>
										<strong>IMDb Rating:</strong> {data?.imdbRating}
									</span>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default MoviePage;
