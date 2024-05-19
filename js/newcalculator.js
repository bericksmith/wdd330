document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const submit = document.getElementById("submit");
    let currentInput = 0;
    let inputs = [];

    const calculator = {
        a: 0,
        b: 0,
        read() {
            this.showPrompt('Enter a number:', 0);
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        },
        sub() {
            return this.a - this.b;
        },
        div() {
            return this.b !== 0 ? this.a / this.b : 'Cannot divide by zero';
        },
        showPrompt(question, defaultValue) {
            document.getElementById('question').textContent = question;
            document.getElementById('answer').value = defaultValue;
            modal.style.display = "block";
        },
        next() {
            if (currentInput === 0) {
                this.a = parseFloat(document.getElementById('answer').value);
                this.showPrompt('Enter a second number:', 0);
                currentInput++;
            } else {
                this.b = parseFloat(document.getElementById('answer').value);
                this.showResults();
            }
        },
        showResults() {
            modal.style.display = "none";
            alert(`Addition: ${this.sum()}
            Subtraction: ${this.sub()}
            Multiplication: ${this.mul()} 
            Division: ${this.div()}`);
        }
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    submit.onclick = function() {
        calculator.next();
    };

    document.getElementById('start-calc').addEventListener('click', () => calculator.read());
});
