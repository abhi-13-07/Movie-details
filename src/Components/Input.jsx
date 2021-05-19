import React, { useContext } from 'react';
import { MovieContext } from '../MoviesProvider';

const Input = () => {
	const { query } = useContext(MovieContext);
	const [queryParams, setQueryParams] = query;

	const handleChange = e => {
		setQueryParams(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<div style={{ width: '500px', margin: 'auto' }}>
			<h2 className="m-3">Search Movie</h2>
			<div className="form-group m-3">
				<label htmlFor="">Movie Name</label>
				<input
					type="text"
					name="s"
					className="form-control"
					value={queryParams.s}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label htmlFor="">Released Year</label>
				<input
					type="text"
					name="y"
					className="form-control"
					value={queryParams.y}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default Input;
