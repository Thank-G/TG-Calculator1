function insertNum(num) {
    document.getElementById('demo').innerHTML = document.getElementById('demo').innerHTML.concat(num);
}
function getnum(num) {
    let input_num = document.getElementById("input");
    switch(num){
        case 1:
            input_num.value += "1";
            break;
        case 2:
            input_num.value += "2";
            break;
        case 3:
            input_num.value += "3";
            break;
        case 4:
            input_num.value += "4";
            break;
        case 5:
            input_num.value += "5";
            break;
        case 6:
            input_num.value += "6";
            break;
        case 7:
            input_num.value += "7";
            break;
        case 8:
            input_num.value += "8";
            break;
        case 9:
            input_num.value += "9";
            break;
        case 0:
            input_num.value += "0";
            break;
        case '.':
            input_num.value += ".";
            break;
    }
}

// Clear  screen function
function clearnum() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}

// Operator Section
function operator(opsign) {
    let input_num = document.getElementById("input");
    switch(opsign){
        case '+':
            input_num.value += '+';
            break;
        case '-':
            input_num.value += '-';
            break;
        case '/':
            input_num.value += '/';
            break;
        case '*':
            input_num.value += '*';
            break;
    }
}

// Backspace Function

function backspace() {
    let input_num = document.getElementById("input");
    let oneclear = input_num.value;

    if (oneclear.length > 0) {
        oneclear = oneclear.substring(0, oneclear.length-1);
        input_num.value = oneclear;
    }
}


// Equalto
function compute() {
    let input_num = document.getElementById("input");
    ans = Math.floor(+eval(input_num.value));
    document.getElementById('answer').value = "=" + ans;
}

function ON() {
    document.getElementById('input').value = "0";
    document.getElementById('answer').value = "";
}   

 