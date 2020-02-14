export interface User {
	url: string;
	repos_url: string;
	name: string;
	bio: string;
}

export const createDefaultUser = () => ({
	url: "",
	repos_url: "",
	name: "",
	bio: ""
});
