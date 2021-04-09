console.log("Initiated lol")
const express = require('express');
const app = express();
const PORT = process.ENV.PORT ||3000;

var apiKeys = {
    i89eNOFdoIWHnFOfIW923jfnFHW: "Brainy",
    niABIbidjboDbobo3iiBDibfoi3:"Agent",
    jeijnUHEUb9BdnbidObnonoQond:"Neil",
    uygsbFIB98hOFjnokNFnfoknjnF:"Sammy"
}

app.use(express.json())

app.listen(
    PORT,
    () => console.log("API is listening!")
)

app.get("/API/check",(req,res) =>{
    res.status(200).send({
        status: "200",
        working: true
    })
});

app.post('/API/:apikey/:frndname',(req,res)=>{
    const { frndname } = req.params;
    const { apikey } = req.params;
    console.log(req.params)
    if (!apiKeys[apikey]){
        res.status(418).send({
            status: "Invalid API"
        })
    }

    res.status(200).send({
        reqType: "POST",
        friendname: `${frndname}`
    })
});
