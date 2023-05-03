import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/home.view";
import Value from "./views/value.view";
import Application from "./views/application.view";
import Movie from "./views/movie.view";
import Login from "./views/Login";
import Book from "./views/book.view";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/value" element={<Value />} />
					<Route path="/applications" element={<Application />} />
					<Route path="/movie" element={<Movie />} />
					<Route path="/books" element={<Book />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
