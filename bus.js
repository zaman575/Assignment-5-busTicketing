const allBtn = document.getElementsByClassName("kbd");
let setLeft = 40;
let totalAmount = 0;
let grandTotal = 0;
// Initialize total amount
let selectedSeats = []; // Array to store selected seats

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        setLeft = setLeft - 1;
        const seatName = event.target.parentNode.childNodes[1].innerText;
        const seatPrice = 550;
        
        totalAmount += seatPrice; // Update total amount by adding seat price
        selectedSeats.push({ name: seatName, price: seatPrice });
        

        const seatClass = 'economic';
       
        const selectedSeat = document.getElementById("selectedSeat");
        selectedSeat.innerHTML += `${seatName} ${seatClass} ${seatPrice}<br>`; // Append selected seat to the list
        event.target.classList.add("bg-green-500");

        setInnerText("seats-left", setLeft);
        setInnerText("total-price", totalAmount); // Update total amount in UI
        
        
    });
}

nextBtn.addEventListener("click", function () {
    hidden.style.display = "block"; // Show the hidden section
});


const nextBtn = document.getElementById("nextBtn");
const hiddenSection = document.getElementById("hiddenSection");
let selectedSeatsCount = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function() {
        selectedSeatsCount++;
        if (selectedSeatsCount > 4) {
            alert("You can only select up to 4 seats.");
            selectedSeatsCount--; // Decrement the count to prevent selecting more than 4 seats
            return;
        }
    });
}

nextBtn.addEventListener("click", function() {
    if (selectedSeatsCount > 4) {
        alert("You can only select up to 4 seats before proceeding.");
    } else {
        hiddenSection.style.display = "block"; // Show the hidden section
    }
});


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}