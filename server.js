import http from "http";
import dotenv from 'dotenv'

dotenv.config();
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
