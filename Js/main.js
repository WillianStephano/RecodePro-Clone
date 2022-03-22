/* MENU */
window.onscroll = function () {menuFixo();};

var barraMenu = document.querySelector(".cabecalho_principal");
var sticky = barraMenu.offsetTop; //pego a distancia do elemento ate o topo da pagina
var logo = document.querySelector(".img_logo_cabecalho");
var txtMenu = barraMenu.querySelectorAll(".link_menu_lista");

console.log(txtMenu);

function menuFixo() {
  if (window.pageYOffset >= sticky) {
    barraMenu.classList.add("sticky");
    logo.src = "Conteudo/recode_pro-NEG-logo.svg";
    txtMenu[0].style.color = "white";
    txtMenu[1].style.color = "white";
    txtMenu[2].style.color = "white";
    txtMenu[3].style.color = "white";
    /* Devido a dificuldade fiz esta horrorossa gambiarra que logo sera corrigida */
  } else {
    barraMenu.classList.remove("sticky");
    logo.setAttribute("src", "Conteudo/recode_pro-logo-1.svg");
    txtMenu[0].style.color = "black";
    txtMenu[1].style.color = "black";
    txtMenu[2].style.color = "black";
    txtMenu[3].style.color = "black";
    /* Devido a dificuldade fiz esta horrorossa gambiarra que logo sera corrigida */
  }
}
