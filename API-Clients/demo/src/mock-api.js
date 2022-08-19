const express = require("express");
const apiMocker = require("connect-api-mocker");

const port = 3001;
const app = express();

app.use("/api", apiMocker("mock-api"));

app.listen(port, () => console.log(`request on port ${port}`));