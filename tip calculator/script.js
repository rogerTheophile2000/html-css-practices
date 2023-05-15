const button = document.getElementById("calculate");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalOutput = document.getElementById("total");

button.addEventListener("click", () => {
    const billValue = Number( billEl.value );
    const tipValue = Number(tipEl.value);
    const totalValue = billValue + (1 + tipValue / 100);

    totalOutput.innerHTML = totalValue;
} )