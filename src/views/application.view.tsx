import React, { useState } from "react";
import "./Application.css";
import ApplicationCardTemplate from "../components/ApplicationCardTemplate";
import ApplicationCardTemplate2 from "../components/ApplicationCardTemplate2";
import { useGetAllApplicationsQuery } from "../api/applications.api";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { CircularProgress, InputAdornment, MenuItem } from "@mui/material";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { setVisited } from "../redux/auth";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "20px",
	width: "100%",
	borderRadius: "120px",
}));

const SearchInput = styled(TextField)(({ theme }) => ({
	width: "50%",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
	borderRadius: "120px",
}));

const FilterSelect = styled(Select)(({ theme }) => ({
	minWidth: "100px",
	marginLeft: "20px",
	[theme.breakpoints.down("sm")]: {
		marginLeft: 0,
		marginTop: "20px",
		minWidth: 0,
		width: "100%",
	},
}));

function Application() {
	const dispatch = useDispatch();
	const { currentData, isError, isLoading, isSuccess, error, isFetching } =
		useGetAllApplicationsQuery({
			pollingInterval: 0, // disable polling for this query
			refetchOnMountOrArgChange: true,
		});

	const [keyword, setKeyword] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("");
	if (isLoading) return <CircularProgress />;

	if (isError) return <div>An error has occurred!</div>;

	if (isFetching && !currentData)
		return (
			<Box sx={{ overflow: "hidden" }}>
				<Skeleton variant="text" />
			</Box>
		);

	const maxRecommendedApps = 10;

	// Function to shuffle an array
	function shuffleArray(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function getRandomUniqueApps(array: any[], exclude: any[], count: number) {
		const uniqueApps = array.filter((app) => !exclude.includes(app));
		return shuffleArray(uniqueApps).slice(0, count);
	}

	const shuffledApps = shuffleArray([...currentData]);
	const recommendedApps = shuffledApps.slice(0, maxRecommendedApps);
	const newReleasesApps = getRandomUniqueApps(
		currentData,
		recommendedApps,
		maxRecommendedApps
	);
	const topSellingApps = getRandomUniqueApps(
		currentData,
		[...recommendedApps, ...newReleasesApps],
		maxRecommendedApps
	);

	const chunkSize = 3;
	const chunkedData = currentData
		? currentData.reduce((resultArray: any[][], item: any, index: number) => {
				const chunkIndex = Math.floor(index / chunkSize);

				if (!resultArray[chunkIndex]) {
					resultArray[chunkIndex] = [];
				}

				resultArray[chunkIndex].push(item);

				return resultArray;
		  }, [])
		: [];

	const categorySet = new Set(
		currentData.map((application: any) => application.application_author)
	);

	return (
		<div>
			<SearchContainer>
				<SearchInput
					label="Search"
					variant="outlined"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>

				<FilterSelect
					value={categoryFilter}
					onChange={(e) => setCategoryFilter(e.target.value)}
					displayEmpty
				>
					<MenuItem value="">All</MenuItem>
					{[...categorySet].map((category) => (
						<MenuItem key={category} value={category}>
							{category}
						</MenuItem>
					))}
				</FilterSelect>
			</SearchContainer>
			<div className="application">
				{chunkedData.map((column: any[], columnIndex: any) => (
					<div key={`column-${columnIndex}`} className="application-column">
						{column.map((application: any) => (
							<div
								key={application.application_id}
								className="application-card-wrapper"
								onClick={() => {
									const newApplication = {
										...application,
										filter: "applications",
									};
									dispatch(setVisited(newApplication));
								}}
							>
								<Link
									to={`/applications/${application.application_id}`}
									style={{
										textDecoration: "none",
										color: "inherit", // Adjust the color value as needed
									}}
								>
									<ApplicationCardTemplate
										className="application-card1"
										application_id={application.application_id}
										application_name={application.application_name}
										application_rating={
											application.application_rating
										}
										application_price={application.application_price}
										application_author={
											application.application_author
										}
										application_image={application.application_image}
										application_trailer={
											application.application_trailer
										}
									/>
								</Link>
							</div>
						))}
					</div>
				))}
			</div>
			<h2 className="recommendedtext">Recommended for you</h2>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="application2">
				{recommendedApps.map(
					(application: {
						application_id: any;
						application_name: any;
						application_image: any;
						application_trailer: any;
						application_rating: any;
						application_price: any;
						application_author: any;
					}) => (
						<div className="application-card">
							<Link
								to={`/applications/${application.application_id}`}
								style={{
									textDecoration: "none",
									color: "inherit", // Adjust the color value as needed
								}}
							>
								<ApplicationCardTemplate2
									application_id={application.application_id}
									application_name={application.application_name}
									application_rating={application.application_rating}
									application_price={application.application_price}
									application_author={application.application_author}
									application_image={application.application_image}
									application_trailer={application.application_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>

			<h2 className="recommendedtext">New Releases</h2>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="application2">
				{newReleasesApps.map(
					(application: {
						application_id: any;
						application_name: any;
						application_image: any;
						application_trailer: any;
						application_rating: any;
						application_price: any;
						application_author: any;
					}) => (
						<div className="application-card">
							<Link
								to={`/applications/${application.application_id}`}
								style={{
									textDecoration: "none",
									color: "inherit", // Adjust the color value as needed
								}}
							>
								<ApplicationCardTemplate2
									application_id={application.application_id}
									application_name={application.application_name}
									application_rating={application.application_rating}
									application_price={application.application_price}
									application_author={application.application_author}
									application_image={application.application_image}
									application_trailer={application.application_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>

			<h2 className="recommendedtext">Top Selling</h2>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div className="application2">
				{topSellingApps.map(
					(application: {
						application_id: any;
						application_name: any;
						application_image: any;
						application_trailer: any;
						application_rating: any;
						application_price: any;
						application_author: any;
					}) => (
						<div className="application-card">
							<Link
								to={`/applications/${application.application_id}`}
								style={{
									textDecoration: "none",
									color: "inherit", // Adjust the color value as needed
								}}
							>
								<ApplicationCardTemplate2
									application_id={application.application_id}
									application_name={application.application_name}
									application_rating={application.application_rating}
									application_price={application.application_price}
									application_author={application.application_author}
									application_image={application.application_image}
									application_trailer={application.application_trailer}
								/>
							</Link>
						</div>
					)
				)}
			</div>
			<Footer />
		</div>
	);
}

export default Application;
