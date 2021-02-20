let calculator = {
    sum(){
        return this.b+this.a;
    },
    mul(){
        return this.a*this.b;
    },read(){
        this.a = prompt("write a: ",0);
        this.b = prompt("write b: ",0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );