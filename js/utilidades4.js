function calcularCuotaMensual() {
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value) / 100;
    var loanTermInYears = parseInt(document.getElementById("loanTerm").value);
    
    var numberOfPayments = loanTermInYears * 12;
    var monthlyInterestRate = annualInterestRate / 12;
    
    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
    var formattedMonthlyPayment = monthlyPayment.toFixed(2);
    
    document.getElementById("result").textContent = "El monto a pagar cada mes es de $" + formattedMonthlyPayment;
}