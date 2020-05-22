import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
// import {Client} from "pg";
// import {Agent} from "https";
// import * as rp from "request-promise";
// import {dbOptions} from "./config";

const PORT = process.env.PORT || 5000;

// const agent = new Agent({keepAlive: true});
// const rpApi = rp.defaults({agent});

// const client = new Client(dbOptions);
// client.connect();

const commandsApp: express.Application = express();
commandsApp.use(cors({ origin: true }));
commandsApp.use(bodyParser.json());
commandsApp.use(bodyParser.urlencoded({ extended: true }));

commandsApp.get("/", (request: express.Request, response: express.Response) => {
    response.send({ status: "up" });
});
commandsApp.get("/quizzes", (request: express.Request, response: express.Response) => {
    response.send({
        quizzes: [
            {
                name: " ", questions: []
            },
            {
                name: " ", questions: []
            },
            {
                name: " ", questions: []
            },
            {
                name: " ", questions: []
            },
            {
                name: " ", questions: []
            },
            {
                name: " ", questions: []
            }
        ]
    });
});

commandsApp.listen(PORT, () => console.log(`listening on port ${PORT}`));
