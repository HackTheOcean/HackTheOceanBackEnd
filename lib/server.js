const opc = require("./controllers/oceanPollutionController");
const owc = require("./controllers/oceanWildlifeController");
const express = require("express");
const { request, response } = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) =>{
    response.json({message: "Welcome to hackTheOceanAPI"});
});

app.listen(port, () => {
    console.log(`hackTheOceanAPI in localhost:${port}`);
});

app.get("/pollution", async (request, response) =>{
    const allPollution = await opc.getAll();
    response.json(allPollution);
});

app.get("/pollution/:id", async (request, response) =>{
    const id = parseInt(request.params.id);
    const pollutionById = await opc.getOneDetails(id);
    response.json(pollutionById);
});

app.get("/wildlife", async (request, response) =>{
    const allWildlife = await owc.getAll();
    response.json(allWildlife);
});

app.get("/wildlife/:id", async (request, response) =>{
    const id = parseInt(request.params.id);
    const wildlifeById = await owc.getOneDetails(id);
    response.json(wildlifeById);
});