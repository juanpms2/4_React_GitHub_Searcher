import * as React from "react";
import { MembersCollectionComponent } from "./members-collection.component";

interface Props {
	organization: string;
}

export const MembersCollectionContainer: React.FunctionComponent<Props> = (
	props
) => {
	const organization = props.organization;
	return <MembersCollectionComponent organization={organization} />;
};
