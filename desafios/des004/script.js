


let botoesProd = document.getElementsByClassName('produto');

for (let i = 0; i < botoesProd.length; i++) {
    botoesProd[i].addEventListener('click', function () {

        //Obtendo o preço associado ao botão clicado
        var preco = this.getAttribute('data-preco');

        //Executando a função para exibir o preço
        mostrarPreco(preco);
    });
}

//Função para exibir o preço
function mostrarPreco(preco) {
    window.alert(`O preço do produto é $${preco}. Continuar com a compra?`);

    let resposta = Number.parseFloat(prompt('Qual a quantia de dinheiro que você tem?'))

    let troco = resposta - preco;

    if (isNaN(resposta) || resposta == 0) {
        alert(`Desculpe, coloque o valor que deseja, para fazer a validação do pagamento!`);

    }else if (resposta >= preco) {
        alert(`Compra confirmada.Obrigado pela preferência! 
Aqui está seu troco: $${troco.toFixed(2)}`);
    }else{
        alert('Compra negada. Saldo insuficiente, ou falta de crédito!');
    }

    

}

/* 
(preco >= resposta) {
    alert(`Compra negada, falta de saldo`);
else if (resposta == preco){

    alert(`Compra efetuada com sucesso. Obrigado pela preferência`);

} else {
    alert(`Compra efetuada com sucesso. Obrigado pela preferência. Seu troco: ${troco}`);
}

*/


