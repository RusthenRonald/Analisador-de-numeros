//Seleciono por id
var num = document.getElementById('txtn')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []
//Função adiconar numeros
function Adicionar(){
    //validação
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.innerHTML=`Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)
    }
    else{
        window.alert('Dados inválidos!')
    }
    num.value=''
    function isNumero(n){
        if(Number(n)>=1 && Number(n)<=100){
            return true
        }
        else{
            return false 
        }
    }
    function inLista(n,l){
        if(l.indexOf(Number(n))!= -1){
            return true
        }
        else {
            return false 
        }
    }
}
//Analise de números
function Finalizar(){
    if(valores.length==0){
        window.alert('Adicione valores para continuar!')
    }
    else{
        tot = valores.length
        res.innerHTML=`Tem ${tot} números cadastrados.`
        //maior e menor valor
        maior = valores[0]
        menor = valores[0]
        for(var pos in valores){
            if(valores[pos]>maior){
                maior = valores[pos]
            }
            if(valores[pos]<menor){
                menor = valores[pos]
            }
        }
    }
}