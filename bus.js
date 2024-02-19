// document.getElementById("btn-buy-ticket").addEventListener("click", function (event) {
//     console.log(event.target);
    
// });

// function handleClick(event) {
//     console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
// }

const allBtn = document.getElementsByClassName("kbd");
let setLeft = 40;

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        setLeft = setLeft - 1;
        document.getElementById("seats-left").innerText = setLeft;
    })

    
}

