/* 
  OBJETIVO - quando alguem clicar no botão temos que
 mostrar a imagem de fundo correspondente 

 - passo 1 - dar um jeito de pegar o elemneto HTML dos botoes
 - passo 2- dar um jeito de identificar o clique do usuario no botão
 - passo 3- desmarcar o botão selecionado anteriormente 
 -passo  4- marcar o botão clicado como se estivesse selecionado
 -passo  5- esconder a imagem anterior 
 -passo 6- fazer aparecer a imagem correspondente ao botão clicado 

*/
//passo 1 - dar um jeito de pegar o elemneto HTML dos botoes
const botoescarrossel= document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


// 2- dar um jeito de identificar o clique do usuario no botão
botoescarrossel.forEach((botao, indice) => {
   botao.addEventListener('click', () => {

     
     desativarBotaoSelecionado();

      
      selecionarBotaoCarrosel(botao);

    
      esconderImagemAtiva();

      mostrarImagemDeFundo(indice);

  })


})
function selecionarBotaoCarrosel(botao) {
  botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

