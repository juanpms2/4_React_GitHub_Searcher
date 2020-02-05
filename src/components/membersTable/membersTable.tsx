import * as React from "react";
import { MemberEntity } from "model/member";
import { memberAPI } from "api/memberAPI";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";
import { trackPromise } from "react-promise-tracker";

interface Props {}

const useGetMembers = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [companie, setCompanie] = React.useState<string>("");

	return { members, setMembers, companie, setCompanie };
};

export const MembersTableComponent = (props: Props) => {
	const { companie, setCompanie, members, setMembers } = useGetMembers();

	const loadMembers = () => {
		trackPromise(
			memberAPI.getAllMembers(companie).then((members) => setMembers(members))
		);
	};

	return (
		<div className="row">
			<h2> Members Page</h2>
			<input
				type="text"
				value={companie}
				onChange={(e) => setCompanie(e.target.value)}
				placeholder="Introduce un nombre..."
			/>
			<button onClick={loadMembers}>Load</button>
			<table className="table">
				<thead>
					<MemberHead />
				</thead>

				<tbody>
					{members.map((member: MemberEntity) => (
						<MemberRow key={member.id} member={member} />
					))}
				</tbody>
			</table>
		</div>
	);
};
