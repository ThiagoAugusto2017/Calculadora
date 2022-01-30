
class Calculadora{
constructor(){
    this.upperValue = document.querySelector("#upper-number");
    this.resultVelue = document.querySelector("#result-number");
    this.reset = 0;
};

clearCalc(){
    // para limpar a calculadora 
    this.upperValue.textContent = "0";
    this.resultVelue.textContent = "0"
};

Checkdados(input,upperValeu,reg){
 
    // testanto se e um numero ou nao 
    if((!reg.test(input) &&
    //se for um numero vamos retirar ele nao executando
    !reg.test(upperValeu.substr(upperValeu.length - 1)) 
    )){
       return true; 
    }else{
      return false;  
    }

};
// resolvendo as operações 
fatoracao() {
// fazer um array para usar na fatororação
//o split transformar os dados da string em um array com separação de espaço
let upperdadosArray= (this.upperValue.textContent).split(" ");
// resultado da operação os
let result= 0;

for(let i = 0; i<=upperdadosArray.length; i++){

let atualItem = upperdadosArray[i];
    
if(atualItem == "+"){
 // parseFloat transforma string em numeros
    result = parseFloat(upperdadosArray[i - 1]) + parseFloat(upperdadosArray[i + 1]);
   }

      }
this.upperValue.textContent = result;
this.resultVelue.textContent = result;

}


btnpress(){
 // This => e o div do html
   console.log(this)
   let input = this.textContent;
   let upperValue = calc.upperValue.textContent;

   //verificar se o codigo e so numeros 
   var reg = new RegExp("^\\d+$");
  

   if(input == "AC"){

    calc.clearCalc();

   }else if(input == "="){

    calc.fatoracao();

   }else{

    // adicionar espaço entre os operadores na

    if(!reg.test(input)){
        input=` ${input} `;

    }

   //checar se vai ter so numero e um codigo operador 
   if(calc.Checkdados(input,upperValue,reg)){
    return false;
}

//para entrar com os dados na calculadora 
 if(upperValue =="0"){
     calc.upperValue.textContent = input
 }else {
     calc.upperValue.textContent += input
 }
}
}
};

// iremos criar uma obj calculadora 

let calc = new Calculadora;

// iremos selecionar todas os botoes 
 
let buttons = document.querySelectorAll(".btn");
console.log(buttons);

//Colocar opção de cliclk nos botoes
// [i] sera o loop de cada ida em cada botao 

for(let i = 0; buttons.length > i; i++){
    buttons[i].addEventListener("click",calc.btnpress)}
    
// for(let i = 0; buttons.length > i; i++){        
//     buttons[i].initKeyEvent("keyup",calc.btnpress)
// }
    
//
