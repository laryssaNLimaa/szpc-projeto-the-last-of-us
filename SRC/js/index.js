alert('Olá');
//teste de comentario 
/* testando
comentario de mais
 de uma linha */

/*Objtivo- quando clicar no botao temos que mostrar a imagem de fundo na sequencia */

// -1° jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// -2° jeito de indentificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log(indice);

        // -3° desmarcar o botao selecionado anterio 
        desativarBotaoSelecionado();

        // -4° marcar o botao clicado como a cor verde 
        botao.classList.add('selecionado');

        // -5° esconder  imagem anterior
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa');

        // -6° fazer aparecer a imagem correspondente ao botão clicado 
        imagens[indice].classList.add('ativa');


    })
})

    function desativarBotaoSelecionado() {
          const botaoSelecionado = document.querySelector('.selecionado');
          botaoSelecionado.classList.remove('selecionado');
}

