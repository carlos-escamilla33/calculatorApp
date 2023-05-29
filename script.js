class Calculator {
    constructor() {
    }

    calcAdd(num1, num2) {
        return num1 + num2;
    }

    calcSub(num1, num2) {
        return num1 - num2;
    }

    calcDiv(num1, num2) {
        return num1 / num2;
    }

    calcMult(num1, num2) {
        return num1 * num2;
    }

    createButtons(rows, cols) {
        const calcBody = document.querySelector(".keys");
        calcBody.style.setProperty("--grid-rows", rows);
        calcBody.style.setProperty("--grid-columns", cols);

        for (let i = 0; i < (rows * cols); i++) {
            const circle = document.createElement("btn");
            circle.classList.add("circle");
            calcBody.append(circle);
        }
    }
}

const main  = () => {
    let iphoneCalc = new Calculator();
    iphoneCalc.createButtons(5, 4);
}

main();