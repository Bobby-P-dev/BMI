function bmi() {
    let beratBadan = document.getElementById("bb").value;
    let tinggiBadan = document.getElementById("tb").value;

    let a = beratBadan;
    let b = tinggiBadan / 100;

    let pangkat = b * b;

    let total = a / pangkat;
    let result = "";
    console.log(total);

    if(total < 18.5){
        result = "Underweight";
    }else if(total > 18.5 && total < 24.9){
        result = "Normal weight";
    }else if(total > 25 && total < 29.9){
        result = "Overweight"
    }else if(total > 30){
        result = "Obesity"
    }else ("")
    

    document.getElementById("result").innerHTML =
    "<p> Your BMI is <b>" + total.toFixed(1) + " " + "<b>" + result + "<b>";
};