
let totalBudget = 50000;
let totalSpent = 0;

function addExpense(){

let name = document.getElementById("expenseName").value;

let amount = Number(document.getElementById("expenseAmount").value);

let category = document.getElementById("expenseCategory").value;

if(name === "" || amount === 0){

alert("Please enter valid expense");

return;

}

totalSpent += amount;

let remaining = totalBudget - totalSpent;

document.getElementById("totalSpent").innerText = "₹" + totalSpent;

document.getElementById("remaining").innerText = "₹" + remaining;


let li = document.createElement("li");

li.innerHTML = name + " (" + category + ")" + "<span>₹" + amount + "</span>";

document.getElementById("expenseList").appendChild(li);


document.getElementById("expenseName").value = "";

document.getElementById("expenseAmount").value = "";

}