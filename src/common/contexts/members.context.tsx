import * as React from "react";
import { MemberEntity } from "model";
import { trackPromise } from "react-promise-tracker";
import { getAllMembers } from "api/memberAPI";

interface Props {}

interface Context {
	members: MemberEntity[];
	company: string;
	setCompany: (company: string) => void;
	loadMembers: () => void;
	organization: string;
}

export const MembersContext = React.createContext<Context>(null);

export const MemberProvider = (props) => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [company, setCompany] = React.useState<string>("");
	const [organization, setOrganization] = React.useState<string>("");

	const loadMembers = () => {
		trackPromise(
			getAllMembers(company).then((members) => {
				setMembers(members);
				setOrganization(company);
			})
		);
	};

	return (
		<MembersContext.Provider
			value={{ members, company, organization, setCompany, loadMembers }}
		>
			{props.children}
		</MembersContext.Provider>
	);
};
