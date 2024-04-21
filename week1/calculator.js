let calculator = {

    read() {
      this.a = +prompt('Enter the first number (a):', 0);
      this.b = +prompt('Enter the second number (b):', 0);
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
      if (this.b !== 0) {
        return this.a / this.b;
      } else {
        return 'Cannot divide by zero';
      }
    }
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
  alert(calculator.sub());
  alert(calculator.div());
  