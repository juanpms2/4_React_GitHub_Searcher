import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { MemberEntity } from "model";
import { MediaCard } from "common";
import { getAllMembers } from "common";
import { trackPromise } from "react-promise-tracker";
import { MembersContext } from "core";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { linkRoutes } from "core";

interface Context {
	members: MemberEntity[];
	setCompany: (company: string) => void;
	loadMembers: () => void;
	organization: string;
	booleanError: boolean;
	txtError: string;
}

interface Props {
	organization: string;
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

const useLoadMembers = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const membersContext = React.useContext(MembersContext);
	const ac = new AbortController();

	const loadMembers = (organization, , { signal: ac.signal }) => {
		trackPromise(
			getAllMembers(organization)
				.then((members) => {
					setMembers(members);
					membersContext.setMembers(members);
					membersContext.setOrganization(organization);
					membersContext.setBooleanError(false);
				})
				.catch((error) => {
					membersContext.setOrganization(organization);
					membersContext.setBooleanError(true);
					membersContext.setTxtError(error);
					return error;
				})
		);
	};

	return { members, loadMembers };
};

export const MembersCollectionComponent: React.FunctionComponent<Props> = (
	props
) => {
	const classes = useStyles();
	const organization = props.organization;
	const { members, loadMembers } = useLoadMembers();
	const [page, setPage] = React.useState(0);
	const increment: number = 4;
	const [init, setInit] = React.useState<number>(0);
	const [fin, setFin] = React.useState<number>(init + increment);
	const totalMembers: number = Math.round(members.length / 4);
	const [showMembers, setShowMembers] = React.useState<MemberEntity[]>(
		members.slice(init, fin)
	);

	React.useEffect(() => {
		loadMembers(organization);
		showMembers.splice(0);
		setShowMembers(members.slice(init, fin));
	}, [organization, page]);

	const next = () => {};

	const back = () => {};

	const handleChange = () => {};

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
				<Pagination count={totalMembers} page={page} onChange={handleChange} />
			</div>
		</>
	);
};
