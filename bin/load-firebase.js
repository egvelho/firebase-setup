#!/usr/bin/env node

const loadFirebase = require("../server/load-firebase").loadFirebase;
const [outPath] = process.argv.slice(2);

loadFirebase({ outPath });
