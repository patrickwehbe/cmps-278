import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
	container: {
		padding: "2rem",
	},
});

const TermsOfServicePage = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Typography variant="h4" component="h1" gutterBottom>
				Terms of Service
			</Typography>
			<Typography variant="body1" gutterBottom>
				Welcome to the Fake Google Play Store! By using our service, you agree to
				the following terms and conditions:
			</Typography>
			<Typography variant="h6" component="h2" gutterBottom>
				1. Use of Service
			</Typography>
			<Typography variant="body1" gutterBottom>
				The Fake Google Play Store is provided on an "as is" and "as available"
				basis. We reserve the right to modify or discontinue the Service at any
				time without prior notice.
			</Typography>
			<Typography variant="h6" component="h2" gutterBottom>
				2. User Conduct
			</Typography>
			<Typography variant="body1" gutterBottom>
				You agree to use the Service only for lawful purposes and in a way that
				does not infringe on the rights of others or restrict or inhibit anyone
				else's use and enjoyment of the Service. You also agree not to circumvent,
				disable or otherwise interfere with security-related features of the
				Service or features that prevent or restrict use or copying of any content
				or enforce limitations on use of the Service or the content accessible via
				the Service.
			</Typography>
			<Typography variant="h6" component="h2" gutterBottom>
				3. Intellectual Property Rights
			</Typography>
			<Typography variant="body1" gutterBottom>
				All content included on the Fake Google Play Store, such as text,
				graphics, logos, images, audio clips, and software, is the property of
				Fake Google Play Store or its content suppliers and is protected by United
				States and international copyright laws.
			</Typography>
			<Typography variant="body1" gutterBottom>
				This is just a sample Terms of Service agreement. Please consult a legal
				professional to draft your own agreement.
			</Typography>
		</div>
	);
};

export default TermsOfServicePage;
