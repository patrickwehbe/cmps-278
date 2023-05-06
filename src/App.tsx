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
import AdminView from "./views/admin.view";
import MoviesTable from "./components/MoviesTable";
import BooksTable from "./components/BooksTable";
import ApplicationsTable from "./components/ApplicationsTable";
import GamesTable from "./components/GamesTable";
import UsersTable from "./components/UsersTable";
import Footer from "./components/Footer";

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
					<Route path="/admin" element={<AdminView />} />
					<Route path="/admin/users" element={<UsersTable />} />
					<Route path="/admin/games" element={<GamesTable />} />
					<Route path="/admin/applications" element={<ApplicationsTable />} />
					<Route path="/admin/books" element={<BooksTable />} />
					<Route path="/admin/movies" element={<MoviesTable />} />
					<Route path="/value" element={<Value />} />
					<Route path="/applications" element={<Application />} />
					<Route path="/movies" element={<Movie />} />
					<Route path="/applications/:id" element={<ApplicationDetailPage />} />
					<Route path="/games" element={<Game />} />
					<Route path="/games/:id" element={<GameDetailPage />} />
					<Route path="/books" element={<Book />} />
					<Route path="/books/:id" element={<BookDetailPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
