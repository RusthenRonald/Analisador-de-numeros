//Seleciono por id
var num = document.getElementById('txtn')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []
//Função adiconar numeros
function Adicionar(){
    //validação
    if(isNumero(num.value) && !inLista(num.value)){
        window.alert('Continue!')
    }
    else{
        window.alert('Dados inválidos!')
    }
    function isNumero(){

    }
    function inLista(){

    }
}