import React from "react";
import { MembersContext } from "common/contexts";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { MemberEntity } from "model";
import { MediaCard } from "components";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));

export const FullWidthGrid = () => {
	const membersContext = React.useContext(MembersContext);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3} style={{ justifyContent: "center" }}>
				{membersContext.members.map((member: MemberEntity) => (
					<Grid item xs={8} sm={4} md={3} key={member.id}>
						<Paper className={classes.paper}>
							<MediaCard member={member} />
						</Paper>
					</Grid>
				))}
				<Pagination count={10} color="primary" />
			</Grid>
		</div>
	);
};
