const express = require('express');
const app = express();
const port = 5000;
const db = require('./db')
const Drink = require('./models/drinkModel')

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Server Working!');
});

app.get("/getbeverages", async (req, res) => {
    try {
      const drinks = await Drink.find({});
      res.send(drinks);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
