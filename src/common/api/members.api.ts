import * as React from "react";
import {
	MemberEntity,
	createDefaultMemberEntity,
	UserEntity,
	createDefaultUserEntity
} from "model";

export const getAllMembers = (
	organizationName: string
): Promise<MemberEntity[]> => {
	const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

	return fetch(gitHubMembersUrl)
		.then((response) => checkStatus(response, organizationName))
		.then((response) => parseJSON(response))
		.then((data) => resolveMembers(data, organizationName));
};

export const getUser = (login: string): Promise<UserEntity> => {
	const gitHubUserUrl: string = `https://api.github.com/users/${login}`;

	return fetch(gitHubUserUrl)
		.then((response) => checkStatus(response, login))
		.then((response) => parseJSON(response))
		.then((data) => resolveUser(data));
};

const checkStatus = (response: Response, name: string): Promise<Response> => {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response);
	} else {
		let error = new Error(response.statusText);
		throw `El usuario o compañía ${name} no existe en nuestra base de datos: ${error}`;
	}
};

const parseJSON = (response: Response): any => {
	return response.json();
};

const resolveMembers = (
	data: any,
	organizationName: string
): Promise<MemberEntity[]> => {
	const members = data.map((gitHubMember) => {
		const member: MemberEntity = createDefaultMemberEntity();

		member.id = gitHubMember.id;
		member.login = gitHubMember.login;
		member.avatar_url = gitHubMember.avatar_url;
		member.company = organizationName;
		return member;
	});

	return Promise.resolve(members);
};

const resolveUser = (data: UserEntity): Promise<UserEntity> => {
	const user: UserEntity = { ...data };

	// user.login= data.login;
	// user.id= data.id;
	// user.node_id= data.node_id;
	// user.avatar_url= data.avatar_url;
	// user.gravatar_id= data.gravatar_id;
	// user.url= data.url;
	// user.html_url= data.html_url;
	// user.followers_url= data.followers_url;
	// user.following_url= data.following_url;
	// user.gists_url= data.gists_url;
	// user.starred_url= data.starred_url;
	// user.subscriptions_url= data.;
	// user.organizations_url= data.string;
	// user.repos_url= data.string;
	// user.events_url= data.string;
	// user.received_events_url= data.string;
	// user.type= data.string;
	// user.site_admin= boolean;
	// user.name= data.string;
	// user.company= data.string;
	// user.blog= data.string;
	// user.location= data.string;
	// user.email= data.string;
	// user.hireable= data.string;
	// user.bio= data.string;
	// user.public_repos= data.number;
	// user.public_gists= data.number;
	// user.followers= data.number;
	// user.following= data.number;
	// user.created_at= data.string;
	// user.updated_at= data.string;

	return Promise.resolve(user);
};
