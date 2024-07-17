const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');

let linhasTabela = '';


form.addEventListener('submit', function(nome){
    nome.preventDefault();
    inserirLinhaTabela();
    limparInputs();
})

function formatarNumeroTelefone(NumeroTelefone) {
    NumeroTelefone = NumeroTelefone.replace(/\D/g, '');  
    NumeroTelefone = NumeroTelefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');    
    return NumeroTelefone;}

function inserirLinhaTabela(){
    const corpoTalela = document.querySelector('tbody');    
    let linhaAdicionada = `<tr><td>${nome.value}</td><td>${formatarNumeroTelefone(telefone.value)}</td></tr>`;
    linhasTabela = linhasTabela + linhaAdicionada;
    corpoTalela.innerHTML = linhasTabela;
}

function limparInputs(){
    nome.value = '';
    telefone.value = '';
}


