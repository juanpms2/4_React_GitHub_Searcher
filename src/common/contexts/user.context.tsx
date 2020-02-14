import * as React from "react";
import { User } from "model";
import { getUser } from "api/memberAPI";

interface Props {}

interface Context {
	user: User;
	loadUser: (user: string) => void;
}

export const UserContext = React.createContext<Context>(null);

export const UserProvider = (props) => {
	const [user, setUser] = React.useState<User>();

	const loadUser = (userLogin: string) => {
		getUser(userLogin).then((user) => {
			setUser(user);
		});
	};

	return (
		<UserContext.Provider value={{ user, loadUser }}>
			{props.children}
		</UserContext.Provider>
	);
};
