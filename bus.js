const allBtn = document.getElementsByClassName("kbd");
let setLeft = 40;
let totalAmount = 0; // Initialize total amount
let selectedSeats = []; // Array to store selected seats

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        setLeft = setLeft - 1;
        const seatName = event.target.parentNode.childNodes[1].innerText;
        const seatPrice = 550;
        
        totalAmount += seatPrice; // Update total amount by adding seat price
        selectedSeats.push({ name: seatName, price: seatPrice }); // Add selected seat to the array

        const seatClass = 'economic';
       
        const selectedSeat = document.getElementById("selectedSeat");
        selectedSeat.innerHTML += `${seatName} ${seatClass} ${seatPrice}<br>`; // Append selected seat to the list

        event.target.classList.add("bg-green-500");

        setInnerText("seats-left", setLeft);
        setInnerText("total-price", totalAmount); // Update total amount in UI
    });
}

const nextBtn = document.getElementById("nextBtn");
const hiddenSection = document.getElementById("hidden");

nextBtn.addEventListener("click", function () {
    hidden.style.display = "block"; // Show the hidden section
});

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}