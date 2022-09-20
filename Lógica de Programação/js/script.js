

const velocidademedia = () => {
    let distancia = parseFloat(document.getElementById('distancia').value); 
    let tempo = parseFloat(document.getElementById('tempo').value);
    let vm = document.getElementById('vm').value
    vm = (distancia /tempo).toFixed(2)

    document.getElementById('vm').value = vm
    rendimentohistorico = `${distancia}/${tempo}=${vm}`
    imprimir(vm)

}

const imprimir = (vm) => {
    const para = document.createElement("p");
    const node = document.createTextNode(vm);
    para.appendChild(node);
    console.log(para)
    const elementDOM = document.getElementById('red');
    elementDOM.appendChild(para);
    
}
 
const excluir = function(){
    document.getElementById('distancia').value = ""
    document.getElementById('tempo').value = ""
    document.getElementById('vm').value = ""
}
