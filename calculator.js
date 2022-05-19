document.addEventListener("DOMContentLoaded", function () {
  let age = document.getElementById("age");
  let height = document.getElementById("height");
  let weight = document.getElementById("weight");
  let male = document.getElementById("m");
  let female = document.getElementById("f");
  let form = document.getElementById("form");

  function validateForm() {
    if (
      age.value == "" ||
      height.value == "" ||
      weight.value == "" ||
      (male.checked == false && female.checked == false)
    ) {
      alert("All fields are required!");
      document.getElementById("submit").removeEventListener("click", countBmi);
    } else {
      countBmi();
    }
  }
  document.getElementById("submit").addEventListener("click", validateForm);

  function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
      p.push("male");
    } else if (female.checked) {
      p.push("female");
    }
    form.reset();
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

    var result = "";
    if (bmi < 18.5) {
      result = "BMI<18.5 (subponderal)";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "BMI între 18,5 şi 24,9 (greutate normală)";
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "BMI între 25 şi 29, 99 (supraponderal)";
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "BMI între 30 şi 34, 99 (obezitate, gradul I)";
    } else if (35 <= bmi) {
      result = "BMI între 35 şi 39, 99 (obezitate, gradul II)";
    }

    var bmiText = document.getElementsByClassName("bmi-text")[0];
    var bmiValue = document.getElementsByClassName("bmi-value")[0];

    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));

    bmiText.appendChild(t);
    bmiValue.appendChild(b);
    bmiValue.appendChild(r);

    document.getElementById("submit").removeEventListener("click", countBmi);
    document.getElementById("submit").removeEventListener("click", validateForm);
  }
  document.getElementById("submit").addEventListener("click", countBmi);
});
