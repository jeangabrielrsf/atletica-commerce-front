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
import CartContext from "./contexts/CartContext";
import { useState } from "react";
import UserCart from "./pages/UserCart";
function App() {
	const [cart, setCart] = useState([]);
	return (
		<>
			<CartContext.Provider value={{ cart, setCart }}>
				<TeamsCategoriesProvider>
					<TeamsProvider>
						<ProductsCategoriesProvider>
							<ProductsProvider>
								<Router>
									<Routes>
										<Route path="/home" element={<HomeScreen />} />
										<Route path="/loja" element={<Store />} />
										<Route path="/times" element={<Teams />} />
										<Route path="/carrinho" element={<UserCart />} />
										<Route index path="*" element={<Navigate to="/home" />} />
									</Routes>
								</Router>
							</ProductsProvider>
						</ProductsCategoriesProvider>
					</TeamsProvider>
				</TeamsCategoriesProvider>
			</CartContext.Provider>
		</>
	);
}

export default App;
