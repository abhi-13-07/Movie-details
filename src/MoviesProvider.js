import React, { useState, createContext } from 'react';
import useFetch from './useFetch';

export const MovieContext = createContext();

export const MoviesProvider = ({ children }) => {
	const [queryParams, setQueryParams] = useState({
		s: '',
		y: '',
		i: '',
	});

	const { data, loading, error } = useFetch(
		'http://www.omdbapi.com/',
		queryParams
	);

	return (
		<MovieContext.Provider
			value={{
				query: [queryParams, setQueryParams],
				movies: { data, loading, error },
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};
