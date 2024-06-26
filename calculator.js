document.addEventListener("DOMContentLoaded", function() {
  const calculator = {
      a: 0,
      b: 0,
      read() {
          let firstNum = prompt('Enter a number:', 0);
          let secondNum = prompt('Enter a second number:', 0);
          this.a = firstNum ? parseFloat(firstNum) : 0;
          this.b = secondNum ? parseFloat(secondNum) : 0;
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
      }
  };

  function runCalculator() {
      calculator.read();
      alert(`Addition: ${calculator.sum()}
      Subtraction: ${calculator.sub()}
      Multiplication: ${calculator.mul()} 
      Division: ${calculator.div()}`);
  };

  document.getElementById('start-calc').addEventListener('click', runCalculator);
});