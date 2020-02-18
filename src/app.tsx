import * as React from "react";
import { Spinner } from "./common/components/spinner";
import { SearchAppBar, SimpleContainer, SimpleModal } from "./components";
import { MemberProvider } from "common/contexts";

export const App: React.FunctionComponent = () => {
	return (
		<>
			<Spinner />

			<MemberProvider>
				<SimpleModal />
				<SearchAppBar />
				<SimpleContainer />
			</MemberProvider>
		</>
	);
};
