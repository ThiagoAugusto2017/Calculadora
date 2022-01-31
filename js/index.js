
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

//soma 
soma1(n1,n2){
    return parseFloat(n1) + parseFloat(n2)
}
//subtracao 
subtracao(n1,n2){
    return parseFloat(n1) - parseFloat(n2)
}
//multiplicação 
multiplicacao(n1,n2){
    return parseFloat(n1) * parseFloat(n2)
}
//divisão 
divisao(n1,n2){
    return parseFloat(n1) / parseFloat(n2)
}

refreshvalues(total){

this.upperValue.textContent = total;
this.resultVelue.textContent = total;
}



// resolvendo as operações 
fatoracao() {
// fazer um array para usar na fatororação
//o split transformar os dados da string em um array com separação de espaço
let upperdadosArray= (this.upperValue.textContent).split(" ");
// resultado da operação os
let result= 0;

for(let i = 0; i<=upperdadosArray.length; i++){

let atualItem = upperdadosArray[i];
 
// este operetion ira sera o i na operação para iniciar o for novamente apos a operação 
let operation = 0;
if(atualItem == "x"){
 // parseFloat transforma string em numeros
    result = calc.multiplicacao(upperdadosArray[i - 1]), (upperdadosArray[i + 1]);
   operation = 1;
}else if(atualItem == "/"){

    result = calc.divisao(upperdadosArray[i - 1]), (upperdadosArray[i + 1]);
    operation = 1;
    // checa se na fatoracao (calculadora tem alguma / ou * se tiver ele nao soma e nem -;)
   }else if(!upperdadosArray.includes("x")&& !upperdadosArray.includes("/")){

    if(atualItem == "+"){
        // parseFloat transforma string em numeros
           result = calc.soma1(upperdadosArray[i - 1]), (upperdadosArray[i + 1]);
           operation = 1;
       }
    else if(atualItem == "-"){
        // parseFloat transforma string em numeros
           result = calc.subtracao(upperdadosArray[i - 1]), (upperdadosArray[i + 1]);
           operation = 1;
       }

   }

   // atualiza valores do array para proxima iteração 

   if(operation){

    // transforma o indice anterior em resultado na calculadora
       upperdadosArray[i-1] = result;
   // remove os itens ja utilizados para a operação um
   
   upperdadosArray.splice(i,2);

   //atualiza o valor do indice 
    i=0;

   }



      }
      if(result){
          calc.reset = 1;


      }

calc.refreshvalues(result);

}


btnpress(){
 // This => e o div do html
   console.log(this)
   let input = this.textContent;
   let upperValue = calc.upperValue.textContent;

   //verificar se o codigo e so numeros 
   var reg = new RegExp("^\\d+$");

   if(calc.reset && reg.test(input)){
       upperValue = "0";
   }

   // limpar reset
   calc.reset = 0;
  

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
