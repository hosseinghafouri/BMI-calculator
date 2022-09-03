const $ = document;
let weightInput = $.querySelector("#weight");
let weightVal = $.querySelector("#weight-val");
let heightInput = $.querySelector("#height");
let heightVal = $.querySelector("#height-val");
let result = $.querySelector("#result");

function calculate() {
    let bmi;
    weightVal.innerHTML = weightInput.value + " kg";
    heightVal.innerHTML = heightInput.value + " cm";
    bmi = (weightInput.value / Math.pow( (heightInput.value/100), 2 )).toFixed(1);
    result .innerHTML = bmi;
    if (bmi < 18.5) {
        result.nextElementSibling. innerHTML = "Under Weight";
        result.style.color = "#ffc44d";
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        result.nextElementSibling. innerHTML = "Normal Weight";
        result.style.color = "#0be881";
    }else if (bmi >= 25 && bmi <= 29.9 ) {
        result.nextElementSibling. innerHTML = "Over weight";
        result.style.color = "ff884d";
    }else{
        result.nextElementSibling. innerHTML = "Obese";
        result.style.color = "#ff5e57";
    }
};
