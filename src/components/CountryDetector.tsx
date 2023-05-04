import React, { useEffect, useState } from "react";

interface Country {
	name: string;
}

const CountryDetector: React.FC = () => {
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
		<div>
			{userCountry ? <p>Your country is: {userCountry.name}</p> : <p>Loading...</p>}
		</div>
	);
};

export default CountryDetector;
