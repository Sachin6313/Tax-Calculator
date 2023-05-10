function calculateTax() {
    var income = document.getElementById("income").value;
    var taxRate = document.getElementById("taxRate").value;
  
    var taxAmount = (income * taxRate) / 100;
    var netIncome = income - taxAmount;
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Tax Amount: $" + taxAmount.toFixed(2) + "<br>Net Income: $" + netIncome.toFixed(2);
  }
  