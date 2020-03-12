import * as React from "react";
import { MemberEntity } from "model";
import { trackPromise } from "react-promise-tracker";
import { getAllMembers } from "common";

interface Props {}

interface Context {
	members: MemberEntity[];
	company: string;
	setCompany: (company: string) => void;
	loadMembers: () => void;
	organization: string;
	booleanError: boolean;
	txtError: string;
}

export const MembersContext = React.createContext<Context>(null);

export const MemberProvider = (props) => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [company, setCompany] = React.useState<string>("");
	const [organization, setOrganization] = React.useState<string>("");
	const [booleanError, setBooleanError] = React.useState<boolean>(false);
	const [txtError, setTxtError] = React.useState<string>("");

	const loadMembers = () => {
		trackPromise(
			getAllMembers(company)
				.then((members) => {
					setMembers(members);
					setOrganization(company);
					setBooleanError(false);
				})
				.catch((error) => {
					setBooleanError(true);
					setTxtError(error);
					return error;
				})
		);
	};

	React.useEffect(() => {
		loadMembers();
	}, [company]);

	return (
		<MembersContext.Provider
			value={{
				members,
				company,
				organization,
				setCompany,
				loadMembers,
				booleanError,
				txtError
			}}
		>
			{props.children}
		</MembersContext.Provider>
	);
};
