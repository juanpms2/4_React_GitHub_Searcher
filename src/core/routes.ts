import { generatePath } from "react-router";

interface SwitchRoutes {
	root: string;
	index: string;
	members: string;
	fileMember: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	index: "/index",
	members: "/members/:organization",
	fileMember: "/file-member/:id"
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, "fileMember" | "members"> {
	fileMember: NavigationFunction;
	members: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
	...switchRoutes,
	fileMember: (id) => generatePath(switchRoutes.fileMember, { id }),
	members: (organization) =>
		generatePath(switchRoutes.members, { organization })
};
