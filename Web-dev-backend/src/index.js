import fastify from "fastify";
import config from "./config.js";
import addRouteHandlers from "./handlers/index.js";
import connect from "./connect";

const app = fastify({ logger: true });

addRouteHandlers(app);

try {
    await connect();
    app.listen{(config.port), () => {};
}   
catch (error) {
    app.log.error(error);
    process.exit(1);
    }