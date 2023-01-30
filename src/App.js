import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/home" element={<HomeScreen />} />
					<Route index path="*" element={<Navigate to="/home" />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
