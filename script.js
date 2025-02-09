function calculateEMI() {
    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let loanTenure = document.getElementById("loanTenure").value;

    if (loanAmount === "" || interestRate === "" || loanTenure === "") {
        alert("Please fill in all fields");
        return;
    }

    let principal = parseFloat(loanAmount);
    let annualInterest = parseFloat(interestRate) / 100;
    let months = parseFloat(loanTenure) * 12;
    let monthlyInterest = annualInterest / 12;

    let emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / 
              (Math.pow(1 + monthlyInterest, months) - 1);

    document.getElementById("emiResult").innerText = `Monthly EMI: $${emi.toFixed(2)}`;
}
