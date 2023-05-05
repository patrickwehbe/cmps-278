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
import Book from "./views/book.view";
import GameDetailPage from "./views/GameDetailPage";
import BookDetailPage from "./views/BookDetailPage";

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
					<Route path="/movies" element={<Movie />} />
					<Route path="/applications/:id" element={<ApplicationDetailPage />} />
					<Route path="/games" element={<Game />} />
					<Route path="/games/:id" element={<GameDetailPage />} />
					<Route path="/books" element={<Book />} />
					<Route path="/books/:id" element={<BookDetailPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
