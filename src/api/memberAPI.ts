import * as React from "react";
import {
	MemberEntity,
	createDefaultMemberEntity,
	User,
	createDefaultUser
} from "model";
import { SimpleModal } from "components/modal";

export const getAllMembers = (
	organizationName: string
): Promise<MemberEntity[]> => {
	const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

	return fetch(gitHubMembersUrl)
		.then((response) => checkStatus(response, organizationName))
		.then((response) => parseJSON(response))
		.then((data) => resolveMembers(data, organizationName));
};

export const getUser = (userLogin: string): Promise<User> => {
	const gitHubUserUrl: string = `https://api.github.com/users/${userLogin}`;

	return fetch(gitHubUserUrl)
		.then((response) => checkStatus(response, userLogin))
		.then((response) => parseJSON(response))
		.then((data) => resolveUser(data));
};

const checkStatus = (response: Response, name: string): Promise<Response> => {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response);
	} else {
		let error = new Error(response.statusText);

		alert(
			`El usuario o compañía ${name} no existe en nuestra base de datos: ${error}`
		);
		throw error;
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

const resolveUser = (data: any): Promise<User> => {
	const user: User = createDefaultUser();

	user.url = data.html_url;
	user.repos_url = data.repos_url;
	user.name = data.name;
	user.bio = data.bio;

	return Promise.resolve(user);
};
