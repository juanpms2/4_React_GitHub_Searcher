import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import { Spinner } from "./common/components/spinner";

ReactDOM.render(
	<div>
		<App />
		<Spinner />
	</div>,
	document.getElementById("root")
);
