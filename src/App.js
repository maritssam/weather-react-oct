import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Los Angeles" />
				<footer>
					<p>
						<a
							href="https://github.com/maritssam/weather-react-oct/blob/master/src/App.js"
							target="_blank"
							rel="noopener noreferrer"
						>
							Open-source code
						</a>
						, by{" "}
						<a
							href="https://github.com/melissaair"
							target="_blank"
							rel="noopener noreferrer"
						>
							Marti Medina
						</a>
					</p>
				</footer>
			</div>
		</div>
	);
}
