import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import SyncLoader from "react-spinners/SyncLoader";
// import Loader from "react-loader-spinner";
import "./spinner.css";

export const Spinner = (props) => {
	const { promiseInProgress } = usePromiseTracker();
	return (
		promiseInProgress && (
			<div className="spinner">
				<SyncLoader color="#2BAD60" />
			</div>
		)
	);
};
