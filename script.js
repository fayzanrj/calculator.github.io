let outputField = document.getElementById('output-field');
let stringOfQuestion = document.getElementById('stringOfQuestion');
let btnBackspace = document.getElementById('backspace')
let btnBackspace2 = document.getElementById('backspace2')
let equationToSolve;

let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btnDot = document.getElementById('btnDot')

// FUNCTION TO ADD NUMBER IN THE FIELD
const populateField = (btn) => {
    btn.addEventListener('click', () => {
        if (outputField.value == 0) {
            outputField.value = ''
            if (outputField.value == "") {
                btnBackspace.style.display = 'contents'
            }
            outputField.value = outputField.value + btn.innerHTML;
        } else {
            outputField.value = outputField.value + btn.innerHTML;
        }
    })
}

// populating the field on click
populateField(btn0)
populateField(btn1)
populateField(btn2)
populateField(btn3)
populateField(btn4)
populateField(btn5)
populateField(btn6)
populateField(btn7)
populateField(btn8)
populateField(btn9)

// EVENT LISTENER for backspace1
btnBackspace.addEventListener('click', () => {
    let tempString = outputField.value;
    tempString = tempString.substr(0, outputField.value.length - 1)
    if (tempString == '') {
        btnBackspace.style.display = 'none';
        outputField.value = tempString;
    } else {
        outputField.value = tempString;
    }
})

// EVENT LISTENER for  Backspace2
btnBackspace2.addEventListener('click', () => {
    let tempString = stringOfQuestion.innerHTML;
    if(tempString[tempString.length-1] == ' '){
        tempString = tempString.slice(0, tempString.length - 2)
    } else {
        tempString = tempString.slice(0, tempString.length - 1)
    }

    if (tempString == '') {
        btnBackspace2.style.display = 'none';
        stringOfQuestion.innerHTML = tempString;
    } else {
        stringOfQuestion.innerHTML = tempString;
    }
})



// putting DOT for only once in an equation
btnDot.addEventListener('click', () => {
    let condition = false
    for (let a = 0; a < outputField.value.length; a++) {
        if (outputField.value[a] == '.') {
            condition = true;
            break;
        }
    }
    if (condition != true) {
        outputField.value = outputField.value + btnDot.innerHTML;
    }
})



//SYMBOLS 
let btnAC = document.getElementById("AC")
let btnPM = document.getElementById("P/S")
let btnPercent = document.getElementById("Percent")
let btnDivide = document.getElementById('btnD')
let btnProduct = document.getElementById('btnP')
let btnSubtract = document.getElementById('btnS')
let btnSum = document.getElementById('btn+')
let btnEqualto = document.getElementById('btnEqualto')



//    G R A Y   B U T T O N S
// function to clear output field with AC btn
btnAC.addEventListener('click', () => {
    outputField.value = "0";
    stringOfQuestion.innerHTML = ''
    btnBackspace.style.display = 'none'
    btnBackspace2.style.display = 'none'
})

// event listener FOR +/- btn
btnPM.addEventListener('click', () => {
    let tempString = outputField.value
    if (tempString.startsWith('-')) {
        outputField.value = tempString.substr(1)
    } else {
        outputField.value = '-' + tempString
    }
})

btnPercent.addEventListener('click' , ()=>{
    outputField.value = outputField.value / 100;
})




//                     F U N C T I O N    T O    C H E C K    IF   FIRST CHAR IS MINUS
const checkFirstChar = (equationToSolve) => {
    let tempString = outputField.value
    if (tempString.startsWith('-')) {
        equationToSolve = '(' + tempString + ')'
    } else {
        equationToSolve = tempString
    }
    return equationToSolve
}


//                  A R I T H M E T I C           O P E R A T I O N S
// Event listener to add 
btnSum.addEventListener('click', () => {
    equationToSolve = checkFirstChar(equationToSolve)
    equationToSolve = equationToSolve + ' + '
    stringOfQuestion.innerHTML = stringOfQuestion.innerHTML + equationToSolve;
    btnBackspace2.style.display = 'contents'
    btnBackspace.style.display = 'none'
    outputField.value = ""
})

// Event listener to Subtract
btnSubtract.addEventListener('click', () => {
    if (outputField.value == '') {
        outputField.value = '-'
    } else {
        equationToSolve = checkFirstChar(equationToSolve)
        equationToSolve = equationToSolve + ' - '
        stringOfQuestion.innerHTML = stringOfQuestion.innerHTML + equationToSolve;
        btnBackspace2.style.display = 'contents'
        btnBackspace.style.display = 'none'
        outputField.value = ""
    }
})

// Event listener for Product
btnProduct.addEventListener('click', () => {
    equationToSolve = checkFirstChar(equationToSolve)
    equationToSolve = equationToSolve + ' * '
    stringOfQuestion.innerHTML = stringOfQuestion.innerHTML + equationToSolve;
    btnBackspace2.style.display = 'contents'
    btnBackspace.style.display = 'none'
    outputField.value = ""
})

// Event listener for Divison 
btnDivide.addEventListener('click', () => {
    equationToSolve = checkFirstChar(equationToSolve)
    equationToSolve = equationToSolve + ' / '
    stringOfQuestion.innerHTML = stringOfQuestion.innerHTML + equationToSolve;
    btnBackspace2.style.display = 'contents'
    btnBackspace.style.display = 'none'
    outputField.value = ""
})

// Event listener to show Final output in output field
btnEqualto.addEventListener('click', () => {
    equationToSolve = checkFirstChar(equationToSolve)
    stringOfQuestion.innerHTML = stringOfQuestion.innerHTML + equationToSolve;
    equationToSolve = stringOfQuestion.innerHTML
    stringOfQuestion.innerHTML = stringOfQuestion.innerHTML + " = ";
    outputField.value = eval(equationToSolve)
    if(outputField.value == "0"){
        btnBackspace.style.display = 'none'
    }
    equationToSolve = outputField.value
})