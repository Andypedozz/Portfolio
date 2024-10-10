import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Earthquakes from "./pages/Earthquakes";
import Pokemon from "./pages/Pokemon";

export default function App() {
	return(
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />}/>
					<Route path="/home" element={<Home />}/>
					<Route path="/projects" element={<Projects />}/>
					<Route path="/contacts" element={<Contacts />}/>
					<Route path="/earthquakes" element={<Earthquakes />}/>
					<Route path="/pokemon" element={<Pokemon />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}