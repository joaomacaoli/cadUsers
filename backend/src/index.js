import express from 'express';
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

const frontendPort = 3000;
app.use(cors({ origin: `http://localhost:${frontendPort}`}));

const backendPort = 3030;
const message = `Servidor rodando em http://localhost:${backendPort}`;

app.use(express.json());
app.use(routes);

app.listen(backendPort, () => {
	console.log(message);
});
