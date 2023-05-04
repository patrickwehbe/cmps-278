import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/home.view";
import Value from "./views/value.view";
import Application from "./views/application.view";
import Movie from "./views/movie.view";
import Login from "./views/Login";
import ApplicationDetailPage from "./views/ApplicationDetailPage";
import Game from "./views/game.view";
import Header from "./components/Header";

function App() {
	return (
		<div className="app">
			<Router>
				<Header
					onTabChange={function (newValue: string): void {
						throw new Error("Function not implemented.");
					}}
				/>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/value" element={<Value />} />
					<Route path="/applications" element={<Application />} />
					<Route path="/movie" element={<Movie />} />
					<Route path="/details/:id" element={<ApplicationDetailPage />} />
					<Route path="/games" element={<Game />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
