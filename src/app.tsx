import * as React from "react";
import { Spinner } from "./common/components/spinner";
import { MembersTableComponent, SearchAppBar } from "./components";
import { MemberProvider } from "common/contexts";

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Spinner />
			<MemberProvider>
				<SearchAppBar />
				<MembersTableComponent />
			</MemberProvider>
		</>
	);
};
