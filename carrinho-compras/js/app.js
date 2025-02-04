let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];
    let quantidade = document.getElementById("quantidade").value;

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let valorTotalProduto = quantidade * valorUnitario;
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorTotalProduto}</span>
        </section>`; 
    totalGeral = totalGeral + valorTotalProduto;    
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = `R$ ${totalGeral}`;    
    document.getElementById("quantidade").value = 0;
    
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    totalGeral = 0;
}