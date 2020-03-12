import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { MemberEntity } from "model";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	},
	large: {
		width: theme.spacing(18),
		height: theme.spacing(18),
		margin: "5% auto"
	}
}));

export const MediaCard = (props: { member: MemberEntity }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} title={props.member.login}>
					<Avatar
						alt="Remy Sharp"
						src={props.member.avatar_url}
						className={classes.large}
					/>
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.member.login}
					</Typography>
					<Typography gutterBottom variant="body2" component="h6">
						{props.member.company}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					<Link href="#" target="_blank" variant="button">
						Ver Perfil
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};
