function generarGrafico() {
    var dataInput = document.getElementById("data").value;
    var dataArray = dataInput.split(',').map(Number);

    var barChart = "";

    for (var i = 0; i < dataArray.length; i++) {
        var value = dataArray[i];
        var bar = '_'.repeat(value);
        barChart += (i + 1) + ": " + bar + "\n";
    }

    document.getElementById("barChart").textContent = barChart;
}