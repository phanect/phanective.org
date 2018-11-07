"use strict";

import "./style.css";
import { upgradeElement } from "node_modules/@ampproject/worker-dom/dist/index.mjs";

upgradeElement(document.getElementById("upgrade-me"), "/node_modules/@ampproject/worker-dom/dist/worker.js");
