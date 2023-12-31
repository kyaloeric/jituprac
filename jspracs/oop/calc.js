

class Calculator {
    constructor() {
        this.display = document.getElementById("result");
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.updateDisplay();
    }

    appendOperator(operator) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.calculate();
        }
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
        this.updateDisplay();
    }

    calculate() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentOperand;
        if (this.operation != null) {
            this.display.value = `${this.previousOperand} ${this.operation} ${this.currentOperand}`;
        }
    }
}

const calculator = new Calculator();
