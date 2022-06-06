
const botao = document.getElementById('BotãoCalcular');
botao.addEventListener('click', imc);

resultado.textContent= "Calcule seu IMC!"



function imc(){

const nome = document.getElementById('nome').value;   
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

//calculo do imc
var total = peso / (altura*altura);


//confições para exibir o resultado de acordo com o calculo do imc
if(nome!=='' && altura !== '' && peso !== ''){

    if(total <=18.5){
        resultado.textContent = nome + " você está abaixo do peso! "
    }else if(total >=18.6 && total <= 24.9){
        resultado.textContent = nome + " você está com o peso normal!"
    }else if(total >= 25 && total <= 29.9){
        resultado.textContent = nome + " você está acima do peso!"
    }else if(total >=30 && total<= 34.9){
        resultado.textContent = nome + " você está com obesidade no grau 1!"
    }else if(total >=35 && total <=39.9){
        resultado.textContent = nome + "  Você está com obesidade no grau 2"
    } else if(total >=40 ){
        resultado.textContent = nome + "  Você está com obesidade no grau 2"
    }


}else{
    //exibir caso os campos não forem todos preenchidos
    resultado.textContent ="preencha todos os campos!!"
}

}

