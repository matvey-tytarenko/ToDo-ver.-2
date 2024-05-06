const http = require("http");
const app = require("./index");
require("dotenv").config();

// Server Config
const server = http.createServer(app);
const PORT = process.env.PORT || 5001;

// Server Run
server.listen(PORT, () => {
    try {
        console.log(`Server has been started on: http://localhost:${PORT}`);
    } catch (error) {
        console.error(`Server Error: ${error}`);
    }
})