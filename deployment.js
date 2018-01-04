#!/usr/bin/env node

var SimpleDeployment = require("codedeploy-scripts").SimpleDeployment;
var deployment = new SimpleDeployment({
  appName: "deploytest",
  nodePort: "3000",
  serverScript: "server.js",
  buildFolder: "build",
  staticFolder: "static",
});
deployment.run();
