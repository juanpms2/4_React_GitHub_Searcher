import * as React from "react";
import { UserEntity } from "model";
// import { getUser } from "common";

interface Props {}

interface Context {
	user: UserEntity[];
	setUser: (user: UserEntity[]) => void;
	member: string;
	setMember: (member: string) => void;
	booleanError: boolean;
	setBooleanError: (booleanError: boolean) => void;
	txtError: string;
	setTxtError: (txtError: string) => void;
	// loadUser: (user: string) => void;
}

export const UserContext = React.createContext<Context>(null);

export const UserProvider = (props) => {
	const [user, setUser] = React.useState<UserEntity[]>([]);
	const [member, setMember] = React.useState<string>("");
	const [booleanError, setBooleanError] = React.useState<boolean>(false);
	const [txtError, setTxtError] = React.useState<string>("");

	// const loadUser = (userLogin: string) => {
	// 	getUser(userLogin).then((user) => {
	// 		setUser(user);
	// 	});
	// };

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				member,
				setMember,
				booleanError,
				setBooleanError,
				txtError,
				setTxtError
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};
