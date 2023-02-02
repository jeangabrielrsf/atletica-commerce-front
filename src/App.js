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

function App() {
	return (
		<>
			<ProductsCategoriesProvider>
				<ProductsProvider>
					<Router>
						<Routes>
							<Route path="/home" element={<HomeScreen />} />
							<Route path="/loja" element={<Store />} />
							<Route index path="*" element={<Navigate to="/home" />} />
						</Routes>
					</Router>
				</ProductsProvider>
			</ProductsCategoriesProvider>
		</>
	);
}

export default App;
