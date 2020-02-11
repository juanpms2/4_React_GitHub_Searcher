import * as React from "react";
import { MemberEntity } from "model/member";
import { trackPromise } from "react-promise-tracker";
import { memberAPI } from "api/memberAPI";

interface Props {}

interface Context {
	members: MemberEntity[];
	company: string;
	setCompany: (company: string) => void;
	loadMembers: () => void;
}

export const MembersContext = React.createContext<Context>(null);

export const MemberProvider = (props) => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [company, setCompany] = React.useState<string>("");

	const loadMembers = () => {
		trackPromise(
			memberAPI.getAllMembers(company).then((members) => {
				setMembers(members);
			})
		);
	};
	return (
		<MembersContext.Provider
			value={{ members, company, setCompany, loadMembers }}
		>
			{props.children}
		</MembersContext.Provider>
	);
};
