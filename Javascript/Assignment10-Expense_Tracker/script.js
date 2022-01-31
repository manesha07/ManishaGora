var balance = document.getElementById("balance");
var income =document.getElementById('money-plus');
var expense =document.getElementById('money-minus');
var text =document.getElementById('text');
var amount =document.getElementById('amount');
var button = document.getElementById("btn");
button.type="submit";

var form = document.getElementById("form");

var incomeAdd = 0;
var expenseAdd = 0;
var id = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (amount.value >= 0) {
        incomeAdd += Number(amount.value);
        income.innerHTML = "$"+incomeAdd;
        updateTransactions(id, text.value, amount.value);
        // id++;
        addTransactionDOM(id);
        id++;
    }
    else {
        expenseAdd += Math.abs(Number(amount.value) );
        expense.innerHTML = "$"+expenseAdd;
        updateTransactions(id, text.value, amount.value);
        addTransactionDOM(id);
        id++;
    }

    balance.innerHTML = "$" + (incomeAdd - expenseAdd);
    console.log(balance.innerHTML);
});

// Add transactions to DOM list
function addTransactionDOM(id) {
    // Get sign
  const sign = amount.value < 0 ? '-' : '+';
  
  const item = document.createElement('li');
  console.log("this is id"+id);
    item.innerHTML = `
      ${text.value} <span id=${"spa"+id}>${sign}${Math.abs(
      amount.value
    )}</span> <button class="delete-btn" onclick="removeTransaction(${
      id},${"spa"+id}
      )">x</button>
    `;

    list.appendChild(item);
  }


  var transactions = [];
  function updateTransactions(id,text,amt){
    let object = {
      id:id,
      categories:text,
      amount:amt
    }
    console.log(object);
    transactions.push(object);
  }


  function removeTransaction(id1,spanid) {
    const index = transactions.findIndex(x => x.id === id1);
    if (index > -1) {
      if (transactions[index].amount >= 0)
      {
        incomeAdd -= transactions[index].amount;
      }
      else {
        expenseAdd -= Math.abs(transactions[index].amount);
      }
    transactions.splice(index, 1);
    income.innerHTML = "$"+incomeAdd;
    expense.innerHTML = "$"+expenseAdd;
    balance.innerHTML = "$" + (incomeAdd - expenseAdd);
 }
    const e = spanid;
    console.log("this is spanid"+e);
    e.parentElement.remove();
  }
