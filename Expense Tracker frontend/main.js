// var expenseController = require('../controllers/expense')
// var axios = require('axios');

function addExpenseHandler(e){
    const axios = require('axios')
    e.preventDefault();
    var amount=document.querySelector("#amount");
    var description=document.querySelector("#description");
    var type=document.querySelector("#type");
    console.log(amount,amount.value);
    var expenseDetailsObj={
        amount:amount.value,
        description:description.value,
        type:type.value
    }
    fetch('http://localhost:3000/expense',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseDetailsObj)
      }).then(result=>{
        console.log("Request Sent",result);
        }).catch(err=>{
        console.log(err);
      });
    // axios.post('http://localhost:3000/expense',expenseDetailsObj).then(result=>{
    //   console.log(result)
    // }).catch(err=>{
    //   console.log(err);
    // });
}
// var expensesList=document.querySelector("#expenses");
// function addExpenseHandler(e){
//     e.preventDefault();
//     var amount=document.querySelector("#amount");
//     var description=document.querySelector("#description");
//     var type=document.querySelector("#type");

//     var expenseDetailsObj={
//         amount:amount.value,
//         description:description.value,
//         type:type.value
//     }

//     var expense =document.createElement("li");
//     expense.className="list-group-item"
//     var text=expenseDetailsObj.description+"  -  "+expenseDetailsObj.type+"  -  "+expenseDetailsObj.amount;
//     expense.appendChild(document.createTextNode(text));

//     var editBtn=document.createElement("button");
//     editBtn.appendChild(document.createTextNode("Edit"));
//     editBtn.addEventListener("click",editExpense);

//     function editExpense(){
//         expensesList.removeChild(expense);
//         localStorage.removeItem(expenseDetailsObj.description);
//         amount.value=expenseDetailsObj.amount;
//         description.value=expenseDetailsObj.description;
//         type.value=expenseDetailsObj.type;
//     }

//     var dltBtn=document.createElement("button");
//     dltBtn.appendChild(document.createTextNode("Delete"));
//     dltBtn.addEventListener("click",deleteExpense);

//     function deleteExpense(){
//         expensesList.removeChild(expense);
//         localStorage.removeItem(description);
//     }

//     expense.appendChild(editBtn);
//     expense.appendChild(dltBtn);
//     expensesList.appendChild(expense);
//     localStorage.setItem(expenseDetailsObj.description,JSON.stringify(expenseDetailsObj));
//     amount.value="";
//     description.value="";
//     type.value="";


// }
