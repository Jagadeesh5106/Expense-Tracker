const express = require('express')

const router = express.Router();
const expenseController = require('../controllers/expense')

router.post('/',expenseController.addExpense);
router.get('/',expenseController.getExpenses);
router.delete('/:expenseId',expenseController.deleteExpense);
module.exports = router;