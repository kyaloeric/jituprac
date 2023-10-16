let inputs = document.querySelectorAll("input");
const errorMessage = document.querySelectorAll('.error-message');

inputs[0].addEventListener('input', function (event) {
    let value = event.target.value;
    if (value < 30) {
        if (value == 0) {
            value = 1;
        }
        value = value;
    } else if (value > 30) {
        value = 30;
    }
    event.target.value = value;
});

inputs[1].addEventListener('input', function (event) {
    let value = event.target.value;
    if (value == 0) {
        value = 1;
    }
    if (value < 12) {
        value = value;
    } else if (value > 12) {
        value = 12;
    }
    event.target.value = value;
});

inputs[2].addEventListener('input', function (event) {
    let value = event.target.value;
    if (value == 0) {
        value = 1;
    }
    if (value < 2022) {
        value = value;
    } else if (value > year) {
        value = year;
    }
    event.target.value = value;
});

const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

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

const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");
const button = document.getElementById("button");

button.addEventListener('click', function () {
    let isEmpty = false;
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            isEmpty = true;
            input.nextSibling.nextSibling.innerHTML = "please enter a number";
            input.style.border = "1px solid red";
        }
    });
    if (!isEmpty) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].nextSibling.nextSibling.innerHTML = "";
            inputs[i].style.border = "1px solid #ececec";
        }
        const birthdate = `${inputs[2].value}-${inputs[1].value}-${inputs[0].value}'`;
        const age = calculateAge(birthdate);
        years.innerHTML = age.years;
        months.innerHTML = age.months;
        days.innerHTML = age.days;
    }
});
