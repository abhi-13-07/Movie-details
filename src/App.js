import './App.css';
import Navbar from './Components/Navbar';
import Routes from './Routes';
import { MoviesProvider } from './MoviesProvider';
import Footer from './Components/Footer';

const App = () => {
	return (
		<>
			<MoviesProvider>
				<Navbar />
				<Routes />
				<Footer />
			</MoviesProvider>
		</>
	);
};

export default App;
