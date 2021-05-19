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
					<div className="bg-white p-3">
						<div className="row">
							<div className="col-lg-3">
								<img src={data?.Poster} alt="" />
							</div>
							<div className="col-lg-3">
								<div className=" details-container">
									<div className="label">Name: </div>
									<div>{data?.Title}</div>
									<div className="label">Year: </div>
									<div>{data?.Year}</div>
									<div className="label">Runtime: </div>
									<div>{data?.Runtime}</div>
									<div className="label">Director: </div>
									<div>{data?.Director}</div>
									<div className="label">Writer: </div>
									<div>{data?.Writer}</div>
									<div className="label">Actors: </div>
									<div>{data?.Actors}</div>
									<div className="label">Plot: </div>
									<div>{data?.Plot}</div>
									<div className="label">Language: </div>
									<div>{data?.Language}</div>
									<div className="label">Country: </div>
									<div>{data?.Country}</div>
									<div className="label">IMDb Rating: </div>
									<div>{data?.imdbRating}</div>
								</div>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
};

/*
						<div class="book-details-container">
    <div class="label">Author:</div>
    <div><%= book.author.name %></div>
    <div class="label">Published on:</div>
    <div><%= new Date(book.publishedAt).toDateString() %></div>
    <p class="label">Description:</p>
    <div><%= book.description %></div>
    <div class="label">Pages:</div>
    <div><%= book.noOfPages%></div>
  </div>
					*/

export default MoviePage;
