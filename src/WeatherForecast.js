import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function showForecast(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	function load() {
		let apiKey = "7677ab34c9ac366d0f3ee07e10dd24d2";
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

		axios.get(apiUrl).then(showForecast);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="container">
					<div className="row">
						{forecast.map(function(dailyForecast, index) {
							if (index < 5) {
								return (
									<div className="col-sm" key={index}>
										<WeatherForecastDay data={dailyForecast} />
									</div>
								);
							} else {
								return null;
							}
						})}
					</div>
				</div>
			</div>
		);
	} else {
		load();

		return "Loading...";
	}
}
