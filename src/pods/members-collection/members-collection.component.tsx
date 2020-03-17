import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { MemberEntity } from "model";
import { MediaCard } from "common";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import PaginationItem from "@material-ui/lab/PaginationItem";

interface Props {
	showMembers: MemberEntity[];
	totalMembers: number;
	page: number;
	handleChange: (event: Event, value: number) => void;
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		width: "100%",
		padding: "0 20px",
		"& > * + *": {
			marginTop: theme.spacing(2)
		}
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

export const MembersCollectionComponent: React.FunctionComponent<Props> = (
	props
) => {
	const classes = useStyles();
	const { showMembers, totalMembers, page, handleChange } = props;

	return (
		<>
			<div className={classes.root}>
				<Grid container spacing={3} style={{ justifyContent: "center" }}>
					{showMembers.map((member: MemberEntity) => (
						<Grid item xs={8} sm={4} md={3} key={member.id}>
							<Paper className={classes.paper}>
								<MediaCard member={member} />
							</Paper>
						</Grid>
					))}
				</Grid>
			</div>
			<div className={classes.root}>
				<Typography>Page: {page}</Typography>
				<Pagination
					count={totalMembers}
					page={page}
					onChange={handleChange}
					renderItem={(item) => (
						<PaginationItem
							component={Link}
							to={`?page=${item.page}`}
							onClick={handleChange}
							{...item}
						/>
					)}
				/>
			</div>
		</>
	);
};
