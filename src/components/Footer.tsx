import React, { useEffect, useState } from "react";

interface Country {
	name: string;
}

const Footer: React.FC = () => {
	const [userCountry, setUserCountry] = useState<Country | null>(null);

	useEffect(() => {
		const fetchCountry = async (latitude: number, longitude: number) => {
			try {
				const response = await fetch(
					`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
				);
				const data = await response.json();
				setUserCountry({ name: data.countryName });
			} catch (error) {
				console.error(error);
			}
		};

		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) =>
						fetchCountry(position.coords.latitude, position.coords.longitude),
					(error) => console.error(error)
				);
			} else {
				console.error("Geolocation is not supported by this browser.");
			}
		};

		getLocation();
	}, []);

	return (
		<footer>
			<nav>
				<ul>
					<li>
						<a href="/terms-of-service">Terms of Service</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</nav>
			<p>{userCountry ? `You are in ${userCountry.name}` : "Loading country..."}</p>
		</footer>
	);
};

export default Footer;
