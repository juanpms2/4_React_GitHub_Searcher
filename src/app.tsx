import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { switchRoutes } from "core";
import { MembersScene } from "scenes";
import { Spinner, SimpleModal } from "common";
import { SearchAppBar } from "common";
import { BarTitleComponent } from "pods";
import { MemberProvider } from "core";
import { IndexScene } from "scenes/index.scene";

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
							exact={true}
							path={[switchRoutes.members]}
							component={MembersScene}
						/>
					</Switch>
				</HashRouter>
			</MemberProvider>
		</>
	);
};
