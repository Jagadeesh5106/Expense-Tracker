const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

// app.set('views','views');
// app.set
app.use(bodyParser.json());
const sequelize = require('./config/database')
const expenseRoutes = require('./routes/expense')
const expenseController = require('./controllers/expense')
app.use(cors())
// app.post('/expense',expenseController.addExpense)
app.use('/expense',expenseRoutes);


sequelize.sync().then(()=>{
    app.listen(3000)
}).catch(err=>{
    console.log(err);
});

