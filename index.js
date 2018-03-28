const express = require('express')
const app = express();
const PORT = 3000;

app.use("/phrase", (request, response, next) => {
    request.phrase = "I "
    return next();
})

app.use("/phrase", (request, response, next) => {
    request.phrase += "<3 "
    return next();
})

app.use("/phrase", (request, response, next) => {
    request.phrase += "JavaScript!"
    return next();
})

app.get("/phrase", (request, response, text) => {
    return response.send(request.phrase);
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})