function displayNumber(num) {
  result.value += num;
}
function clearbox() {
  result.value = "";
}
function res() {
  result.value = eval(result.value);
}
function removelastitem() {
  result.value = result.value.slice(0, -1);
}
function toggleExpand() {
    document.getElementById("box").style.height = document.getElementById("box").style.height === "auto" ? "expanded" : "auto";
    document.querySelectorAll(".advanced").forEach((row) =>(row.style.display = row.style.display === "none" ? "table-row" : "none"));
  
}
function calculate(func) {
    let value = parseFloat(result.value);

    const operations = {
        sqrt: Math.sqrt(value),
        cubert: Math.cbrt(value),
        log: Math.log10(value)
    };

    result.value = operations[func]?.toFixed(2);
}
