import './App.css';
import Navbar from './Components/Navbar';
import Routes from './Routes';
import { MoviesProvider } from './MoviesProvider';

const App = () => {
	return (
		<>
			<MoviesProvider>
				<Navbar />
				<Routes />
			</MoviesProvider>
		</>
	);
};

export default App;
