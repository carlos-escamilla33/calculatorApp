const symbols = ["AC", "+/-", "%", "÷",
    7, 8, 9, "x", 4, 5, 6,
    "-", 1, 2, 3, "+", 0,
    "", ".", "="
];


const createButtons = () => {
    const calcBody = document.querySelector(".keys");

    for (let i = 0; i < this.symbols.length; i++) {
        const circle = document.createElement("btn");
        circle.setAttribute("id", `${i}`);
        if (i < 3) {
            circle.style.backgroundColor = "#D4D4D2";
        } else if ((i > 3 && i < 7) || (i > 7 && i < 11) || (i > 11 && i < 15) || (i > 15 && i < 18)) {
            circle.style.backgroundColor = "#505050";
        }
        circle.innerHTML = this.symbols[i];
        circle.classList.add("circle");
        calcBody.append(circle);
    }
}


const main = () => {


}