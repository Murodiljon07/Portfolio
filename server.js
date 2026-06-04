import http from "http";
import app from "./src/app.js";
import cors from "cors";

app.use(cors());

const server = http.createServer(app);
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running PORT:${PORT}\nhttp://localhost:${PORT}`);
});
