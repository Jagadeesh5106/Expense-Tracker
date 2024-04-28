const express = require('express')

const router = express.Router();
const expenseController = require('../controllers/expense')

router.post('/',expenseController.addExpense);
router.get('/',expenseController.getExpenses);
router.get('/:expenseId',expenseController.getExpense);
router.delete('/:expenseId',expenseController.deleteExpense);
router.post('/:expenseId',expenseController.editExpense);
module.exports = router;