/*
Objetivo 1- quando o usuario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no html

passo 1 pegar o botao mostrar mais no js pra poder verificar quando o usuario clicar em cima dele

passo 2 identificar o clique no botao


passo 3 adicionar a classe 'ativo' nos projetos escondidos


Objetivo 2- esconder o botao de mostrar mais

passo 1 pegar o botao e esconder ele
*/


//passo 1 pegar o botao mostrar mais no js pra poder verificar quando o usuario clicar em cima dele


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
