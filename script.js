class Calculator {
    constructor() {
        this.symbols = ["AC", "+/-", "%", "÷",
                        7, 8, 9, "x", 4, 5, 6,
                        "-", 1, 2, 3, "+", 0,
                        ".", "="
                    ];
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

    createButtons() {
        const calcBody = document.querySelector(".keys");

        for (let i = 0; i < this.symbols.length; i++) {
            const circle = document.createElement("btn");
            circle.innerHTML = this.symbols[i];
            circle.classList.add("circle");
            calcBody.append(circle);
        }
    }
}

const main  = () => {
    let iphoneCalc = new Calculator();
    iphoneCalc.createButtons();
}

main();