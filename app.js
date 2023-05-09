const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const path = require('path');
const sequelize = require('./util/database');
const cors = require('cors');

const addExpenseRoute = require('./routes/add-expense');
const deleteExpenseRoute = require('./routes/delete-expense');
const getAllExpenseRoute = require('./routes/get-all-expense');
const homePageRoute=require('./routes/home-page');

app.use(cors());
app.use(bodyParser.json({ encoded: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(addExpenseRoute);

app.use(getAllExpenseRoute);

app.use(deleteExpenseRoute);

app.use(homePageRoute);

sequelize.sync().then(() => {
    app.listen(5000);
}
);
