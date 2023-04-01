it("should calculate the monthly rate correctly", function () {
  // ...
  expect(
    calculateMonthlyPayment({ amount: 13000, years: 5, rate: 4.7 })
  ).toEqual("243.54");
});

it("should return a result with 2 decimal places", function () {
  // ..
  expect(
    calculateMonthlyPayment({ amount: 15014, years: 12, rate: 3.8 })
  ).toEqual("130.00");
});

/// etc
