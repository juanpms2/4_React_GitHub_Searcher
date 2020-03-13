import React from "react";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { MembersContext } from "core";

export const PaginationLink = () => {
	const membersContext = React.useContext(MembersContext);

	return (
		<>
			{membersContext.members.length > 0 && (
				<MemoryRouter
					initialEntries={[`/members/${membersContext.organization}/page=${0}`]}
					initialIndex={0}
				>
					<Route>
						{({ location }) => {
							const query = new URLSearchParams(location.search);
							const page = parseInt(query.get("page"), 4) || 1;

							return (
								<Pagination
									page={page}
									count={Math.round(membersContext.members.length / 4 - 1)}
									renderItem={(item) => (
										<PaginationItem
											component={Link}
											to={`/members/${membersContext.organization}/page=${
												item.page === 1 ? "" : `?page=${item.page}`
											}`}
											{...item}
										/>
									)}
								/>
							);
						}}
					</Route>
				</MemoryRouter>
			)}
		</>
	);
};
