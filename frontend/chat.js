
function toggleChat(){

let chat = document.getElementById("chatContainer");

if(chat.style.display === "flex"){

chat.style.display = "none";

}else{

chat.style.display = "flex";

}

}



function sendMessage(){

let input = document.getElementById("userInput");

let message = input.value;

if(message === "") return;


let chatMessages = document.getElementById("chatMessages");


let userDiv = document.createElement("div");

userDiv.className = "user-message";

userDiv.innerText = message;

chatMessages.appendChild(userDiv);



let botDiv = document.createElement("div");

botDiv.className = "bot-message";

botDiv.innerText = getBotResponse(message);

chatMessages.appendChild(botDiv);


input.value = "";

chatMessages.scrollTop = chatMessages.scrollHeight;

}



function getBotResponse(input){

input = input.toLowerCase();

if(input.includes("goa")){

return "Goa is great for beaches and nightlife. Best time: November to February.";

}

else if(input.includes("manali")){

return "Manali is perfect for adventure and snow. Budget trip can be ₹8k - ₹15k.";

}

else if(input.includes("budget")){

return "Use trains instead of flights and book hostels to reduce cost.";

}

else{

return "I can help with destinations, budgets, hotels, and travel tips!";

}

}