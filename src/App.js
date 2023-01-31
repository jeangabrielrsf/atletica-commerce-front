import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Store from "./pages/Store";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/home" element={<HomeScreen />} />
					<Route path="/loja" element={<Store />} />
					<Route index path="*" element={<Navigate to="/home" />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
