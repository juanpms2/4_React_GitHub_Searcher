import * as React from "react";
import { FileCardMemberComponent } from "./file-member.component";
import { getUser } from "common";
import { useParams } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { UserContext } from "core";
import { linkRoutes } from "core";
import { useHistory } from "react-router-dom";

const useLoadMember = () => {
	const userContext = React.useContext(UserContext);

	const loadUser = (login: string) => {
		console.log(login);
		trackPromise(
			getUser(login)
				.then((user) => {
					userContext.setUser([user]);
					userContext.setMember(login);
					userContext.setBooleanError(false);
					console.log(user);
					// return user;
				})
				.catch((error) => {
					userContext.setMember(login);
					userContext.setBooleanError(true);
					userContext.setTxtError(error);
					return error;
				})
		);
	};
	return { userContext, loadUser };
};

export const FileCardMemberContainer: React.FunctionComponent = () => {
	const { login } = useParams();
	const history = useHistory();
	const { userContext, loadUser } = useLoadMember();

	React.useEffect(() => {
		console.log(login);
		loadUser(login);
	}, [login]);

	return <FileCardMemberComponent user={userContext.user} />;
};
