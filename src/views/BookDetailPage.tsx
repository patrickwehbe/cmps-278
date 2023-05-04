// src/containers/bookDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import BookDetail from "../components/BookDetails";
import { useGetOneBookQuery } from "../api/books.api";
import { useGetAllBooksQuery } from "../api/books.api";
import BookCardTemplate from "../components/BooksCardTemplate";
import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from '../api/user.api';


function BookDetailPage() {
	const { id } = useParams<{ id: string }>();
	const { data: data, isLoading } = useGetOneBookQuery(id);
	const { data: all } = useGetAllBooksQuery({
		pollingInterval: 0,
		refetchOnMountOrArgChange: true,
	});

	const similarBooks =
		all && data
			? all.filter(
					(app: any) =>
						app.book_author === data.book_author &&
						app.book_id !== data.book_id
			  )
			: [];

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<BookDetail

				book_author={data.book_author}
				book_trailer={data.book_trailer}
				book_price={data.book_price}
				book_id={data.book_id}
				book_name={data.book_name}
				book_image={data.book_image}
				book_rating={data.book_rating}
			/>

			<div className="book2">
				{similarBooks.map(
					(book: {
						book_id: any;
						book_name: any;
						book_image: any;
						book_trailer: any;
						book_rating: any;
						book_price: any;
						book_author: any;
					}) => (
						<div className="book-card">
							<Link
								to={`/books/${book.book_id}`}
								style={{
									textDecoration: "none",
									color: "inherit",
								}}
							>
								<BookCardTemplate
									book_id={book.book_id}
									book_name={book.book_name}
									book_rating={book.book_rating}
									book_price={book.book_price}
									book_author={book.book_author}
									book_image={book.book_image}
									book_trailer={book.book_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default BookDetailPage;
