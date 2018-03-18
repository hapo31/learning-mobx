import * as React from "react";
import { render } from "react-dom";
import * as tslib from "tslib";

import { App } from "./App";

tslib.__read;
render(<App />, document.getElementById("app"));
