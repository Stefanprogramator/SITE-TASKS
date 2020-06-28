var questions = [
    ["Paris", "Paris", "12.000 $"],
    ["Paris", "Istambul", "6.000 $"],
    ["Paris", "Venice", "3.000 $"],
    ["Venice", "Paris", "3.000 $"],
    ["Venice", "Venice", "6.000 $"],
    ["Venice", "Istambul", "3.000 $"],
    ["Istambul", "Paris", "6.000 $"],
    ["Istambul", "Venice", "3.000 $"],
    ["Istambul", "Istambul", "6.000 $"],
    ];
var i;

document.getElementById("submit").addEventListener("click", () => {Calculate()} )


function Calculate() {
    let city1 = document.getElementById("city1");
    let city2 = document.getElementById("city2");


for (i = 0; i < questions.length; i++) {
  if(questions[i][0] == city1.value)
    if(questions[i][1] == city2.value)
    {   let result = questions[i][2];
        let res = document.getElementById("result");
        res.style.color = "red";
        res.style.fontWeight = "bold";
        res.innerText = "THE PRICE IS " + result;
        
        return;
    }


 }
}