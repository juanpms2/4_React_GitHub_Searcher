import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { switchRoutes } from "core";
import { MembersScene } from "scenes";
import { Spinner, SimpleModal } from "common";
import { MemberProvider } from "core";
import { IndexScene } from "scenes";
import { FileMemberScene } from "scenes";

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Spinner />

			<MemberProvider>
				<SimpleModal />
				<HashRouter>
					<Switch>
						<Route
							exact={true}
							path={[switchRoutes.root, switchRoutes.index]}
							component={IndexScene}
						/>
						<Route
							exact={false}
							path={[switchRoutes.members]}
							component={MembersScene}
						/>
						<Route
							exact={true}
							path={[switchRoutes.fileMember]}
							component={FileMemberScene}
						/>
					</Switch>
				</HashRouter>
			</MemberProvider>
		</>
	);
};
