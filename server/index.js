const express = require('express');
const dbConfig = require('./config/database');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRoute = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

app.use(cors(
    {
      origin: "http://localhost:4200"
    }
  ));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
app.listen(3000, () => {
    console.log(`Server is listening on port 3000: http://localhost:3000`);
});

app.use('/user',UserRoute)