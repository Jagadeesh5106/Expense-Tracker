const { where } = require('sequelize')
const Expense = require('../models/expense')

exports.addExpense = (req,res,next)=>{
    // console.log(req.expenseDetailsObj)
    // console.log(req.expenseObject)
    // console.log(req.json)
    // console.log(req.body);
    // console.log(req.amount);
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
exports.getExpense = (req,res,next)=>{
    const expenseId = req.params.expenseId;
    Expense.findByPk(expenseId).then(expense=>{
        return res.send(expense);
    }).catch(err=>{
        console.log("No Expense Found with ID")
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

exports.editExpense = (req,res,next)=>{
    const expenseId = req.params.expenseId;
    const editMode = req.query.edit;
    const updatedAmount = req.body.amount;
    const updatedDescription = req.body.description;
    const updatedType = req.body.type;
    Expense.findByPk(expenseId).then(expense=>{
        expense.amount = updatedAmount
        expense.description = updatedDescription;
        expense.type = updatedType;
        return expense.save()
    }
    ).then(result=>{
        console.log("Expense Updated");
        return res.send({message:'Expense Updated'})
    }).catch(err=>{
        console.log(err);
    })
}