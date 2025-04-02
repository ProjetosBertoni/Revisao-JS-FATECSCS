function clicou(){
    alert("Está funcionando!!");
}

function somar(){
    let n1 = Number(window.prompt("Digite um número: "));
    let n2 = Number(window.prompt("Digite o segundo número: "));

    let soma = n1 + n2;
  
    let res = document.querySelector("section#res");
    res.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a ${soma} </p>`
    res.style.display = "block";   
}


let contador = 0 ; 
let cliques = document.querySelector('.mostrarCliques'); 
 
function contar() { 
    contador ++;
    cliques.innerHTML = `<p>O contador está com ${contador} cliques.</p>`; 
} 

function zerar(){
    contador = 0;
    cliques.innerHTML = `<p>O contador está com ${contador} cliques.</p>`; 
}


function calcularSoma(){
    let p1 = Number(window.prompt("Digite a nota da p1"));
    let p2 = Number(window.prompt("Digite o valor da p2"));
    let media = (p1 + p2)/2;
    if(media >= 6){
        let mostrar = document.querySelector(".mostrarNotas");
        mostrar.innerHTML = `<p>Voçê foi aprovado</p>`
    }else{
        let mostrar = document.querySelector(".mostrarNotas");
        mostrar.innerHTML = `<p>Voçê foi reprovado</p>`
    }

}


function Calculadora(){
    let mostrarAlert = Number(window.prompt("[1] = Somar, [2]= subtrair, [3] = multplicação e [4] = divisão"))

    if(mostrarAlert == 1){
        let escolher1num = Number(window.prompt("Escolha o primeiro número!"))
        let escolher2num = Number(window.prompt("Escolha o segundo número!"))
        let somar = escolher1num + escolher2num
        let texto = document.querySelector(".mostrarTexto")
        texto.innerHTML = `<p>A soma dos números é ${somar} </p>`
    }else if(mostrarAlert == 2){
        let escolher1num = Number(window.prompt("Escolha o primeiro número!"))
        let escolher2num = Number(window.prompt("Escolha o segundo número!"))
        let sub = escolher1num - escolher2num
        let texto = document.querySelector(".mostrarTexto")
        texto.innerHTML = `<p>A subtração dos números é ${sub} </p>`
    }else if(mostrarAlert == 3){
        let escolher1num = Number(window.prompt("Escolha o primeiro número!"))
        let escolher2num = Number(window.prompt("Escolha o segundo número!"))
        let mult = escolher1num * escolher2num
        let texto = document.querySelector(".mostrarTexto")
        texto.innerHTML = `<p>A multplicação dos números é ${mult} </p>`
    }else if(mostrarAlert == 4){
        let escolher1num = Number(window.prompt("Escolha o primeiro número!"))
        let escolher2num = Number(window.prompt("Escolha o segundo número!"))
        let div = escolher1num / escolher2num
        let texto = document.querySelector(".mostrarTexto")
        texto.innerHTML = `<p>A divisão dos números é ${div} </p>`
    }else{
        window.alert("Digite o valor correto!")
    }
}