import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { MembersScene } from "scenes";
import { MembersContext } from "core";
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

export const BarTitleComponent = () => {
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
					{title && <SnackbarContent message={title} />}
				</div>
			</Container>
		</React.Fragment>
	);
};
