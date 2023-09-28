import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultPage from './Components/DefaultPage/DefaultPage';
import RulesPage from './Components/RulesPage/RulesPage';
import PrivacyPage from './Components/PrivacyPage/PrivacyPage';
import ReservationPage from './Components/ReservationPage/ReservationPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<DefaultPage />}
				/>
				<Route
					path="/rules"
					element={<RulesPage />}
				/>
				<Route
					path="/privacy"
					element={<PrivacyPage />}
				/>
				<Route
					path="/reservation"
					element={<ReservationPage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
