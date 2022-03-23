/* Cabecalho fixo ao rolar a pagina */
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
    for (var i = 0; i < txtMenu.length; i++) {
      var elementoMenu = txtMenu[i];
      elementoMenu.style.color = "white"
    }
  } else {
    barraMenu.classList.remove("sticky");
    logo.setAttribute("src", "Conteudo/recode_pro-logo-1.svg");
    for (var i = 0; i < txtMenu.length; i++) {
      var elementoMenu = txtMenu[i];
      elementoMenu.style.color = "black";
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
