

let displayResult = document.getElementById("displaybar")

let performCalculate = (num) =>{
    displayResult.value += num;
}


let Result = () => {
    try {
        displayResult.value = eval(displayResult.value)
    }
    catch(err) {
        alert("OOPS PLEASE INPUT A VALID NUMBER");
    }
}

function clear() {
    displayResult.value = "";
}

function deleteInput() {
    displayResult.value= displayResult.value.slice(0, -1);
}
