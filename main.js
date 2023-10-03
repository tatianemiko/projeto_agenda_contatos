const form = document.getElementById('form-agenda')
const contato = [];
let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('telefone');

    if(contato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já é existente.`);
    } else {
        contato.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputNumeroContato.value}</td>`;
        linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}