import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PaginationLink } from "common";
import { AppLayout } from "layout";
import { BarTitleComponent } from "pods";
import { useParams } from "react-router-dom";
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
	const { organization } = useParams();
	const classes = useStyles();

	return (
		<AppLayout>
			<div className={classes.root}>
				<BarTitleComponent />
				<MembersCollectionContainer organization={organization} />
			</div>
			{/* <div className={classes.root}>
				<div className={classes.pagination}>
					<PaginationLink />
				</div>
			</div> */}
		</AppLayout>
	);
};
