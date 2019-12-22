const express   = require('express'),
      connector = require('./DBConnector');

     // console.log("here2");

const app     = express(),
      port    = (process.env.PORT || 5000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all('*', (req, res, next) => {
    console.log("A Client is trying to connect.");
    next();
})

app.post('/addNinja', connector.addNinja);

app.delete('/deleteNinja', connector.deleteNinja);

app.get('/getAllNinja', connector.getAllNinja);

app.put('/updateNinja', connector.updateNinja);


app.all('*', (req, res) => {
    res.status(404).send(`{"Failure": "Invalid Route Entered"}`);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})