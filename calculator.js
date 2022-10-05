class Calculator {
    constructor(value1,value2){
        this.value1=value1
        this.value2=value2
    }

   add(){
    return this.value1 + this.value2;
   }

   subtract(){
    return this.value1 - this.value2;
   }

   multiply (){
    return this.value1 * this.value2;
   }

   divide(){
    return this.value1/this.value2;
    
   }
}

const calc = new Calculator(20,10)

module.exports = Calculator