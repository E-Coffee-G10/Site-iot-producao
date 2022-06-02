// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var funcao = sessionStorage.FUNCAO;

   

if (email != null && nome != null & funcao == 'adm')  {
    
       /*  document.getElementsByClassName('nome_usuario')[0].innerHTML = sessionStorage.NOME_USUARIO; */

        // finalizarAguardar();
}else if(email != null && nome != null & funcao == 'fun'){
      
    document.getElementById('nav-content').innerHTML = `      
  
    <ul>
      <li><a href="cards.html"> Visão Geral</a></li>
      <li><a href="ajuda.html"> Ajuda </a></li>
      <li>
        <a href="index.html" style="color: red" onclick="limparSessao()">
          Sair
        </a>
      </li>
    </ul>
 `
    }
     else {
        window.location = "./login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
   /*  window.location = "../login.html"; */
}

/* // carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}
 */

// modal
/* function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
} */

