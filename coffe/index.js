const bmicompute = document.getElementById('computeBtn');
const BmiEL = document.getElementById("bmiresult");
const bmiConditionEl = document.getElementById("bmiCondition");

function calculateBMI() {
  const heightel = document.getElementById("height").value / 100;
  const Weightel = document.getElementById("weight").value;

  if (!heightel || !Weightel) {
    BmiEL.value = "";
  alert("Please enter valid height and weight values.");
    return;
  }

  const bmiValue = Weightel / (heightel * heightel);

  BmiEL.value = bmiValue;

  if (bmiValue < 18.5) {
    bmiConditionEl.innerText = "Underweight";
  }
  else if (bmiValue >= 18.5 && bmiValue < 25) {
    bmiConditionEl.innerText = "Normal";
  }
  else if (bmiValue >= 25 && bmiValue < 30) {
    bmiConditionEl.innerText = "Overweight";
  }
  else {
    bmiConditionEl.innerText = "Obesity";
  }
}

bmicompute.addEventListener("click", calculateBMI);
