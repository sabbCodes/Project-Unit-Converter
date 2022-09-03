const inputEl = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function(){
    const feetAns = inputEl.value * 3.28084;
    const meterAns = inputEl.value / 3.28084;
    const gallonAns = inputEl.value * 0.264172;
    const literAns = inputEl.value / 0.264172;
    const poundAns = inputEl.value * 2.20462;
    const kiloAns = inputEl.value / 2.20462;
    render(lengthEl, "meters", "feet", feetAns, meterAns);
    render(volumeEl, "liters", "gallons", gallonAns, literAns);
    render(massEl, "kilos", "pounds", poundAns, kiloAns);
})

function  render(firstEl, secEl, thirdEl, fourtEl, fifthEl){
    firstEl.textContent = `${inputEl.value} ${secEl} = ${fourtEl.toFixed(3)} ${thirdEl} | ${inputEl.value} ${thirdEl} = ${fifthEl.toFixed(3)} ${secEl}`;
}

const moonImg = document.getElementById("moonImg");
moonImg.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        moonImg.src = "sun.png";
    } else {
        moonImg.src = "moon.png";
    }
})