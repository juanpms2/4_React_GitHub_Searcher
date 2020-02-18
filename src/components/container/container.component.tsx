import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { FullWidthGrid } from "components/membersLayout";
import { MembersContext } from "common/contexts";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 1000,
		"& > * + *": {
			marginTop: theme.spacing(2)
		},
		margin: "2% auto"
	}
}));

export const SimpleContainer = () => {
	const membersContext = React.useContext(MembersContext);
	const title =
		membersContext.organization != ""
			? `${membersContext.organization.toUpperCase()} Members Page`
			: "";

	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<div className={classes.root}>
					<SnackbarContent message={title} />
				</div>

				<Typography component="div" style={{ height: "100vh" }}>
					<FullWidthGrid />
				</Typography>
			</Container>
		</React.Fragment>
	);
};
