async function request(equation) {
    let api = "http://localhost:3000/";
    let endPoint;

    if (equation.op == '+') {
        endPoint = "add";
    } else if (equation.op == '-') {
        endPoint = "subtract";
    } else if (equation.op == 'x') {
        endPoint = "multiply";
    } else if (equation.op == '/') {
        endPoint = "divide";
    }

    const response  =  await fetch(api + endPoint, {
        method: "POST",
        body: JSON.stringify(
            {
                "first": equation.first,
                "second": equation.second,
            }
        ),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data  =  await response.json();
    return data;
}


const values  =  ["7","8","9","/","4","5","6","x","1","2","3","-","0",".","=","+",]
const display  =  document.getElementById("display");
const buttons  =  document.getElementsByClassName("buttons");

/**
 * extracts numbers and symbols from a string equation
 * @param {*} equation 
 */
function extractSymbols(equation) {
    let first = "";
    let second = "";
    let op = '';
    let op_found = false;

    nums = ["7","8","9","4","5","6","1","2","3","0",".",];
    for(let i = 0; i < equation.length - 1; i++){
        if  ((nums.includes(equation[i]))) {
            if (op_found) {
                second = second.concat(equation[i]);
            } else {
                first = first.concat(equation[i]);
            }
        }
        else {
            op = equation[i];
            op_found = true;
        }
        op = equation[i];
    }

    first = parseInt(first);
    second = parseInt(first);

    return {first, second, op};
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (values[i] === "=") {
            console.log(display.innerHTML);
            equation = extractSymbols(display.innerHTML);
            console.log(request(equation));
            display.innerHTML;
        }
        display.innerHTML = display.innerHTML + values[i];
    })
}