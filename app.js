const bill = document.getElementById('billTotal');
const tip = document.getElementById('tipAmount');
const people = document.getElementById('peopleAmount');
const addBtn = document.getElementById('addBtn');
const minusBtn = document.getElementById('minusBtn')
const total = document.getElementById('totalAmount');


let billTotal = 0;
let tipAmount = 1;
let peopleAmount = 1;
let totalAmount = 0;

const updateDisplay = () => {
    people.innerText = peopleAmount;
    total.innerText = totalAmount;
    total.innerText = totalAmount;
}

bill.addEventListener(('change'), () => {
    billTotal = Number(bill.value)
    calculateTip();
})


tip.addEventListener(('change'), () => {
    tipAmount = Number(tip.value)
    calculateTip();
})

const calculateTip = () => {
    let totalTip = ((tipAmount / 100) * billTotal)
    totalAmount = ((billTotal + totalTip) / peopleAmount).toFixed(2);
    updateDisplay();
}

addBtn.addEventListener('click', () => {
    peopleAmount++
    calculateTip()
    updateDisplay(); 
})

minusBtn.addEventListener('click', () => {
    if (peopleAmount > 1) {
        peopleAmount--
        calculateTip();
        updateDisplay();
    } 
})

updateDisplay()