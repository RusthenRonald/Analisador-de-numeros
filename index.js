//Seleciono por id
var num = document.getElementById('txtn')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []
//Função adiconar numeros
function Adicionar(){
    //validação
    if(isNumero(num.value) && !inLista(num.value,valores)){
        window.alert('Continue!')
    }
    else{
        window.alert('Dados inválidos!')
    }
    function isNumero(n){
        if(Number(n)>=1 && Number(n)<=100){
            return true
        }
        else{
            return false 
        }
    }
    function inLista(){

    }
}