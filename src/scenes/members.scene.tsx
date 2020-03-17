import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppLayout } from "layout";
import { BarTitleComponent } from "pods";
import { MembersCollectionContainer } from "pods";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		width: "100%",
		padding: "0 20px"
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	pagination: {
		margin: "30px auto"
	}
}));

export const MembersScene: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<AppLayout>
			<div className={classes.root}>
				<BarTitleComponent />
				<MembersCollectionContainer />
			</div>
		</AppLayout>
	);
};
