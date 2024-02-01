const express = require('express')

function startServer() {
    const app = express();

    app.listen(3000 , ()=>console.log(`Server is running on port : 3000`))
}

startServer()