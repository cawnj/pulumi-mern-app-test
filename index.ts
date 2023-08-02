import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";

// Config
const config = new pulumi.Config();
const frontendPort = config.requireNumber("frontendPort");
const backendPort = config.requireNumber("backendPort");
const mongoPort = config.requireNumber("mongoPort");

const stack = pulumi.getStack();

// Pull backend image
const backendImageName = "backend";
const backend = new docker.RemoteImage(`${backendImageName}Image`, {
    name: "pulumi/tutorial-pulumi-fundamentals-backend:latest",
});

// Pull frontend image
const frontendImageName = "frontend";
const frontend = new docker.RemoteImage(`${frontendImageName}Image`, {
    name: "pulumi/tutorial-pulumi-fundamentals-frontend:latest",
});

// Pull mongo image
const mongoImage = new docker.RemoteImage("mongoImage", {
    name: "pulumi/tutorial-pulumi-fundamentals-database-local:latest",
});
