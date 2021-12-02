import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./config/Routes";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Route
				render={(props) => (
					<>
						<Header {...props} />
						<Routes />
						<Footer />
					</>
				)}
			/>
		</Router>
	);
}

export default App;
