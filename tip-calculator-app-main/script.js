
let billInput = document.querySelector(".input");
let tip = document.querySelector(".tipAmount");
let numberOfPeopleInput = document.querySelector(".number-of-people");
let total = document.querySelector(".total");

function fivePercent() {
    let bill = parseFloat(billInput.value) || 0;
    let numberOfPeople = parseFloat(numberOfPeopleInput.value) || 1;

    let tipPerPerson = (bill * 0.05) / numberOfPeople;
    let totalOfPerson = (bill / numberOfPeople) + tipPerPerson;

    tip.innerHTML = "$ " + tipPerPerson.toFixed(2);
    total.innerHTML = "$ " + totalOfPerson.toFixed(2);

}

function tenPercent(){
    let bill = parseFloat(billInput.value) || 0;
    let numberOfPeople = parseFloat(numberOfPeopleInput.value) || 1;

    let tipPerPerson = (bill * 0.10) / numberOfPeople;
    let totalOfPerson = (bill / numberOfPeople) + tipPerPerson;

    tip.innerHTML = "$ " + tipPerPerson.toFixed(2);
    total.innerHTML = "$ " + totalOfPerson.toFixed(2);
}

function fifteenPercent(){
    let bill = parseFloat(billInput.value) || 0;
    let numberOfPeople = parseFloat(numberOfPeopleInput.value) || 1;

    let tipPerPerson = "$ " + (bill * 0.15) / numberOfPeople;
    let totalOfPerson = "$ " + (bill / numberOfPeople) + tipPerPerson;

    tip.innerHTML = tipPerPerson.toFixed(2);
    total.innerHTML = totalOfPerson.toFixed(2);
}

function twentyFivePercent(){
    let bill = parseFloat(billInput.value) || 0;
    let numberOfPeople = parseFloat(numberOfPeopleInput.value) || 1;

    let tipPerPerson = (bill * 0.25) / numberOfPeople;
    let totalOfPerson = (bill / numberOfPeople) + tipPerPerson;

    tip.innerHTML = "$ " + tipPerPerson.toFixed(2);
    total.innerHTML = "$ " + totalOfPerson.toFixed(2);
}

function fiftyPercent(){
    let bill = parseFloat(billInput.value) || 0;
    let numberOfPeople = parseFloat(numberOfPeopleInput.value) || 1;

    let tipPerPerson = (bill * 0.50) / numberOfPeople;
    let totalOfPerson = (bill / numberOfPeople) + tipPerPerson;

    tip.innerHTML = "$ " + tipPerPerson.toFixed(2);
    total.innerHTML = "$ " + totalOfPerson.toFixed(2);
}