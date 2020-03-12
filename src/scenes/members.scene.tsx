import React from "react";
import { MembersContext } from "core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { MemberEntity } from "model";
import { MediaCard } from "common";
import { PaginationLink } from "common";
import { AppLayout } from "layout";
import { BarTitleComponent } from "pods";
import { useParams } from "react-router-dom";
import { getAllMembers } from "common";

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

export const MembersScene = () => {
	const membersContext = React.useContext(MembersContext);
	const { organization } = useParams();
	const classes = useStyles();

	const reload = (organization) => {
		membersContext.setCompany(organization);
		// membersContext.booleanError = false;

		return (
			<Grid container spacing={3} style={{ justifyContent: "center" }}>
				{membersContext.members.map((member: MemberEntity) => (
					<Grid item xs={8} sm={4} md={3} key={member.id}>
						<Paper className={classes.paper}>
							<MediaCard member={member} />
						</Paper>
					</Grid>
				))}
			</Grid>
		);
	};

	return (
		<AppLayout>
			<div className={classes.root}>
				<BarTitleComponent />
				{organization ? (
					reload(organization)
				) : (
					<Grid container spacing={3} style={{ justifyContent: "center" }}>
						{membersContext.members.map((member: MemberEntity) => (
							<Grid item xs={8} sm={4} md={3} key={member.id}>
								<Paper className={classes.paper}>
									<MediaCard member={member} />
								</Paper>
							</Grid>
						))}
					</Grid>
				)}
			</div>
			<div className={classes.root}>
				<div className={classes.pagination}>
					<PaginationLink />
				</div>
			</div>
		</AppLayout>
	);
};
