const form = document.getElementById("tripForm");
const result = document.getElementById("tripResult");

form.addEventListener("submit",function(e){

e.preventDefault();

result.innerHTML = `
<h3>Your Smart Trip Plan</h3>

<p>Day 1 : Arrival and city exploration</p>

<p>Day 2 : Adventure activities and local food</p>

<p>Day 3 : Cultural visit and sightseeing</p>

<p>Estimated Budget : ₹15,000 - ₹25,000</p>

<p>Suggested Hotel : 3 star comfortable stay</p>

<p>Transport : Local taxi + metro</p>
`;

});