document.addEventListener("DOMContentLoaded", function() {
    const salaryInput = document.getElementById("salary");
    const taxRegimeSelect = document.getElementById("taxRegimeSelect");
    const calculateBtn = document.getElementById("calculateBtn");
    const taxLiability = document.getElementById("taxLiability");
  
    calculateBtn.addEventListener("click", function(e) {
      e.preventDefault();
      const salary = parseInt(salaryInput.value);
      const selectedRegime = taxRegimeSelect.value;
      let calculatedTax = 0;
  
      if (selectedRegime === "old") {
        if (salary <= 250000) {
          calculatedTax = 0;
        } else if (salary > 250001 && salary <= 500000) {
          calculatedTax = (salary - 250000) * 0.05;
        } else if (salary > 500001 && salary <= 1000000) {
          calculatedTax = 12500 + (salary - 500000) * 0.2;
        } else if (salary > 1000000) {
          calculatedTax = 112500 + (salary - 1000000) * 0.3;
        }
      } else if (selectedRegime === "new") {
        if (salary <= 250000) {
          calculatedTax = 0;
        } else if (salary > 250000 && salary <= 500000) {
          calculatedTax = (salary - 250000) * 0.05;
        } else if (salary > 500000 && salary <= 750000) {
          calculatedTax = 12500 + (salary - 500000) * 0.1;
        } else if (salary > 750000 && salary <= 1000000) {
          calculatedTax = 37500 + (salary - 750000) * 0.15;
        } else if (salary > 1000000 && salary <= 1250000) {
          calculatedTax = 75000 + (salary - 1000000) * 0.2;
        } else if (salary > 1250000 && salary <= 1500000) {
          calculatedTax = 125000 + (salary - 1250000) * 0.25;
        } else if (salary > 1500000) {
          calculatedTax = 187500 + (salary - 1500000) * 0.3;
        }
      }
  
      taxLiability.textContent = `Your Tax Liability: ₹ ${calculatedTax}`;
    });
  });
  