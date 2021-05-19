import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, queryParams) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const source = axios.CancelToken.source();
		const token = source.token;

		const fetchData = async () => {
			if (queryParams?.s === '' && queryParams.i === '')
				return setLoading(false);
			try {
				const { data } = await axios.get(url, {
					cancelToken: token,
					params: {
						apikey: process.env.REACT_APP_MOVIE_API_KEY,
						...queryParams,
					},
				});
				setData(data);
				setLoading(false);
			} catch (err) {
				if (err.response) {
					setData(err.response);
					setError(true);
				}
			}
		};

		fetchData();

		return () => {
			setLoading(true);
			source.cancel();
		};
	}, [url, queryParams]);

	return { data, loading, error };
};

export default useFetch;
