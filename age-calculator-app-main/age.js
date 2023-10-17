// get all input elements and error message elements
let inputs = document.querySelectorAll("input");
const errorMessage = document.querySelectorAll('.error-message');

// event listener for the first input element
inputs[0].addEventListener('input', function (event) {
    let value = event.target.value;
    // make sure the value is not less than 1
    if (value < 1) {
        if (value == 0) {
            value = 1;
        }
        value = value;
    }
    // make sure the value is not greater than 30
    else if (value > 30) {
        value = 30;
    }
    event.target.value = value;
});

// event listener for the second input element
inputs[1].addEventListener('input', function (event) {
    let value = event.target.value;
    // Ensure the value is not less than 1
    if (value == 0) {
        value = 1;
    }
    // Ensure the value is not greater than 12
    if (value < 12) {
        value = value;
    }
    else if (value > 12) {
        value = 12;
    }
    event.target.value = value;
});

// Event listener for the third input element
inputs[2].addEventListener('input', function (event) {
    let value = event.target.value;
    // Ensure the value is not less than 1
    if (value == 0) {
        value = 1;
    }
    // Ensure the value is not greater than the current year
    if (value < 2022) {
        value = value;
    }
    else if (value > year) {
        value = year;
    }
    event.target.value = value;
});

// get the current date
const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

//  calculate age from birthdate
function calculateAge(birthdate) {
    const now = new Date();
    const birth = new Date(birthdate);
    let age = {};
    let yearDiff = now.getFullYear() - birth.getFullYear();
    let monthDiff = now.getMonth() - birth.getMonth();
    let dayDiff = now.getDate() - birth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearDiff--;
        monthDiff += 12;
    }
    let daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    if (dayDiff < 0) {
        dayDiff += daysInLastMonth;
        monthDiff--;
    }
    let totalDays = ((yearDiff * 365) + (monthDiff * daysInLastMonth) + dayDiff);
    age.years = Math.floor(totalDays / 365);
    totalDays = totalDays % 365;
    age.months = Math.floor(totalDays / daysInLastMonth);
    totalDays = totalDays % daysInLastMonth;
    age.days = totalDays;
    return age;
}

// get elements for displaying calculated age
const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");
const button = document.getElementById("button");

// event listener for the button click
button.addEventListener('click', function () {
    let isEmpty = false;
    // Check if any input is empty
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            isEmpty = true;
            input.nextSibling.nextSibling.innerHTML = "please enter a number";
            input.style.border = "1px solid red";
        }
    });
    // If all inputs are filled, calculate and display age
    if (!isEmpty) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].nextSibling.nextSibling.innerHTML = "";
            inputs[i].style.border = "1px solid #ececec";
        }
        const birthdate = `${inputs[2].value}-${inputs[1].value}-${inputs[0].value}`;
        const age = calculateAge(birthdate);
        years.innerHTML = age.years;
        months.innerHTML = age.months;
        days.innerHTML = age.days;
    }
});
