import * as React from "react";
import { MembersCollectionComponent } from "./members-collection.component";
import { useParams } from "react-router-dom";
import { getAllMembers } from "common";
import { trackPromise } from "react-promise-tracker";
import { MembersContext } from "core";
import { MemberEntity } from "model";

const useLoadMembers = () => {
	const membersContext = React.useContext(MembersContext);

	const loadMembers = (organization) => {
		trackPromise(
			getAllMembers(organization)
				.then((members) => {
					membersContext.setMembers(members);
					membersContext.setOrganization(organization);
					membersContext.setBooleanError(false);
					return members;
				})
				.catch((error) => {
					membersContext.setOrganization(organization);
					membersContext.setBooleanError(true);
					membersContext.setTxtError(error);
					return error;
				})
		);
	};

	return { membersContext, loadMembers };
};

export const MembersCollectionContainer: React.FunctionComponent = () => {
	const { organization } = useParams();
	const { membersContext, loadMembers } = useLoadMembers();
	const [page, setPage] = React.useState(1);
	const increment: number = 4;
	const [init, setInit] = React.useState<number>(page);
	const [fin, setFin] = React.useState<number>(init + increment);
	const totalMembers: number = Math.round(membersContext.members.length / 4);

	const reInicia = () => {
		setInit(0);
		setFin(increment);
		setPage(1);
		membersContext.members.slice(0, increment);
		console.log(`reinicia ${init}, ${fin}, ${page}`);
	};

	const handleChange = (event, value) => {
		setInit(value * increment - 4);
		setFin(value * increment);
		setPage(value);
	};

	React.useEffect(() => {
		loadMembers(organization);
		reInicia();
	}, [organization]);

	return (
		<MembersCollectionComponent
			showMembers={membersContext.members.slice(init, fin)}
			totalMembers={totalMembers}
			page={page}
			handleChange={handleChange}
		/>
	);
};
