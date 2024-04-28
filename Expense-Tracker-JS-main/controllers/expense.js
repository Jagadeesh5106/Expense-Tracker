const { where } = require('sequelize')
const Expense = require('../models/expense')

exports.addExpense = (req,res,next)=>{
    console.log(req.expenseDetailsObj)
    console.log(req.expenseObject)
    console.log(req.json)
    console.log(req.body);
    console.log(req.amount);
    const description = req.body.description;
    const type = req.body.type;
    const amount = req.body.amount;
    Expense.create({
        amount: amount,
        description:description,
        type: type
    }).then(result=>{
        console.log("Expense Added");
    }).catch(err=>{
        console.log(err);
    })
    // console.log(amount+"-"+description+"-"+type);
    const expenseObject = {
        amount: amount,
        description: description,
        type: type
    }
    // console.log(expenseObject);
    return res.send({message:'Success'});
}

exports.getExpenses = (req,res,next)=>{
    Expense.findAll().then(result=>{
        // console.log(result)
        // console.log(res.json(result))
        return res.send(result);
    }).catch(err=>{
        console.log(err)
    })
}

exports.deleteExpense = (req,res,next)=>{
    const expenseId = req.params.expenseId;
    Expense.destroy({where:{id:expenseId}}).then(result=>{
        console.log(result);
        return res.send({message:'Deleted'})
    }).catch(err=>{
        console.log(err);
    })
}