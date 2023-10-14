const cloudFunctions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//routers
const mail = require("./routers/mail");

//basicSetting
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

//routerSetting
app.use("/mail", mail);

exports.api = cloudFunctions.region("asia-northeast3").https.onRequest(app);
