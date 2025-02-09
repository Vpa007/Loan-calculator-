document.getElementById("calculate").addEventListener("click", function() {
    // Get input values
    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100 / 12; // Monthly Interest Rate
    let tenure = parseInt(document.getElementById("tenure").value);
    let currency = document.getElementById("currency").value; // Get selected currency

    // Validate inputs
    if (isNaN(amount) || isNaN(rate) || isNaN(tenure) || amount <= 0 || rate <= 0 || tenure <= 0) {
        document.getElementById("emiResult").innerHTML = "⚠️ Please enter valid numbers.";
        return;
    }

    // EMI Calculation Formula
    let emi = (amount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);

    // Display result with selected currency symbol
    document.getElementById("emiResult").innerHTML = "EMI: " + currency + " " + emi.toFixed(2);
});
