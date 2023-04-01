window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const vals = { amount: 15000, years: 12, rate: 3.8 };
  const initAmount = document.getElementById("loan-amount");
  initAmount.value = vals.amount;
  const initYears = document.getElementById("loan-years");
  initYears.value = vals.years;
  const initRate = document.getElementById("loan-rate");
  initRate.value = vals.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const rate = values.rate / 100 / 12;
  const power = Math.floor(values.years * 12);
  const payment = (
    (rate * values.amount) /
    (1 - Math.pow(1 + rate, -power))
  ).toFixed(2);
  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = `$${monthly}`;
}
