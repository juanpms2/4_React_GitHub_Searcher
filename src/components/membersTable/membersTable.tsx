import * as React from "react";
import { MembersContext } from "common/contexts";
import { MemberEntity } from "model/member.model";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";

interface Props {}

export const MembersTableComponent = () => {
	const myContext = React.useContext(MembersContext);
	return (
		<div className="row">
			<h2> Members Page</h2>
			<table className="table">
				<thead>
					<MemberHead />
				</thead>

				<tbody>
					{myContext.members.map((member: MemberEntity) => (
						<MemberRow key={member.id} member={member} />
					))}
				</tbody>
			</table>
		</div>
	);
};
