import React from "react";
import { MemoryRouter as Router } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { MembersContext } from "core";

export const PaginationLink = () => {
	const membersContext = React.useContext(MembersContext);

	return (
		<>
			{membersContext.members.length > 0 && (
				<Router>
					<Pagination
						count={membersContext.members.length / 4 - 1}
						renderItem={(item) => (
							<PaginationItem
								component={Link}
								to={`/cars${item.page === 1 ? "" : `?page=${item.page}`}`}
								{...item}
							/>
						)}
						className
					/>
				</Router>
			)}
		</>
	);
};
