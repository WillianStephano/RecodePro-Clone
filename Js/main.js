/* Cabecalho fixo ao rolar a pagina */
window.onscroll = function () {menuFixo();};

var barraMenu = document.querySelector(".cabecalho_principal");
var sticky = barraMenu.offsetTop; //pego a distancia do elemento ate o topo da pagina
var logo = document.querySelector(".img_logo_cabecalho");
var txtMenu = barraMenu.querySelectorAll(".link_menu_lista");


function menuFixo() {
  if (window.pageYOffset >= sticky) {
    barraMenu.classList.add("sticky");
    logo.src = "Conteudo/recode_pro-NEG-logo.svg";
    for (var i = 0; i < txtMenu.length; i++) {
      var elementoMenu = txtMenu[i];
      elementoMenu.classList.add('link_menu_lista_bt__ativo')
    }
  } else {
    barraMenu.classList.remove("sticky");
    logo.setAttribute("src", "Conteudo/recode_pro-logo-1.svg");
    for (var i = 0; i < txtMenu.length; i++) {
      var elementoMenu = txtMenu[i];
      elementoMenu.classList.remove('link_menu_lista_bt__ativo')
    }
  }
}


/* Toggle menu em dispositovos mobile */
var btToggle = document.querySelector(".bt_toggle_menu");
var menu = document.querySelector(".menu-cabecalho_principal");

function menuToggle() {
  menu.classList.toggle("ativa");
}

btToggle.addEventListener("click", menuToggle);



/* Depoimentos */

//Dados dos depoimentos
const depoimentos = [
  {
    id: 1,
    img: "Conteudo/profile-1.svg",
    txt: "Ouvir da Recode que daria oportunidade para minorias me deu um ânimo descomunal. Eu me empenhei ao meu máximo no curso, e hoje, imensamente agradecido, colho os frutos com alegria.",
    autor: 'William Lopes,',
    local: 'São Paulo'
  },
  
  {
    id: 2,
    img: "Conteudo/profile-2.svg",
    txt: 'Foi uma jornada incrível, passamos por vários desafios e tivemos a consagração através da nossa formatura, foi uma emoção indescritível. Estou muito feliz pela minha aprovação em uma empresa como a Shell.',
    autor: 'Erica Andrade,',
    local: 'São Paulo'
  },
  
  {
    id: 3,
    img: "Conteudo/profile-3.svg",
    txt: 'Aprendi muito a nível técnico com as tecnologias abordadas no curso e a nível comportamental, aprimorando minhas soft skills. A formatura fechou com chave de ouro esse ciclo de imersão durante 6 meses e me abriu as portas para um universo de oportunidades.',
    autor: 'Renata Lima,',
    local: 'Rio de Janeiro'
  },
];

//Seleção de itens no HTML
const secaoDepoimentos = document.querySelector('.secao_depoimentos')
const img = secaoDepoimentos.querySelector('.img_depoimentos')
const txt = secaoDepoimentos.querySelector('.txt_depoimentos')
const autor = secaoDepoimentos.querySelector('.nome_autor_depoimentos')
const local = secaoDepoimentos.querySelector('.local_autor_depoimentos')

const btProximo = secaoDepoimentos.querySelector('.bt_proximo')
const btAnterior = secaoDepoimentos.querySelector('.bt_anterior')

//Depoimento inicial
let depoimentoAtual = 0

//Ao carregar a pagina o dempoimento X ira aparecer 
window.addEventListener('DOMContentLoaded',function () {
  mostrarDepoimento(depoimentoAtual)
})

//Mudar o depoimento baseado na variavel "depoimentoAtual"
function mostrarDepoimento() {
  const item = depoimentos[depoimentoAtual]
  img.src = item.img
  txt.textContent = item.txt
  autor.textContent = item.autor
  local.textContent = item.local
}

//Botão proximo depoimento
btProximo.addEventListener('click', function(){
depoimentoAtual++
if (depoimentoAtual > depoimentos.length - 1) {
  depoimentoAtual = 0
}
mostrarDepoimento(depoimentoAtual)
})

//Botão depoimento anterior
btAnterior.addEventListener('click', function(){
  depoimentoAtual--
  if (depoimentoAtual < 0) {
    depoimentoAtual = depoimentos.length - 1
  }
  mostrarDepoimento(depoimentoAtual)
})