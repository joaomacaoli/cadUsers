import express from 'express';
import cors from "cors";
import routes from "./routes/index.js";
import "dotenv/config.js";

const app = express();

const frontendPort = process.env.FRONT_PORT;
app.use(cors({ origin: `http://localhost:${frontendPort}`}));

const backendPort = process.env.SERVER_PORT;
const message = `Servidor rodando em http://localhost:${backendPort}`;

app.use(express.json());
app.use(routes);

app.listen(backendPort, () => {
	console.log(message);
});
