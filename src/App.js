import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Store from "./pages/Store";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ProductsCategoriesProvider } from "./contexts/ProductsCategoriesContext";
import { TeamsCategoriesProvider } from "./contexts/TeamsCategoriesContext";
import { TeamsProvider } from "./contexts/TeamsContext";
import Teams from "./pages/Teams";

function App() {
	return (
		<>
			<TeamsCategoriesProvider>
				<TeamsProvider>
					<ProductsCategoriesProvider>
						<ProductsProvider>
							<Router>
								<Routes>
									<Route path="/home" element={<HomeScreen />} />
									<Route path="/loja" element={<Store />} />
									<Route path="/times" element={<Teams />} />
									<Route index path="*" element={<Navigate to="/home" />} />
								</Routes>
							</Router>
						</ProductsProvider>
					</ProductsCategoriesProvider>
				</TeamsProvider>
			</TeamsCategoriesProvider>
		</>
	);
}

export default App;
