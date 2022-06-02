/* <!--  funções do site (botões etc) --> */

function userFunction() {

  MenuUserI = document.getElementById("menu_usuario")

  if (MenuUserI.style.display == "none") {
    MenuUserI.style.display = "flex"
  } else {
    MenuUserI.style.display = "none"
  }
}

function ModalFunction() {

  Modalfunc = document.getElementById("modal")

  if (Modalfunc.style.display == "none") {
    Modalfunc.style.display = "flex"
  } else {
    Modalfunc.style.display = "none"
  }
}


/* função dos selects de mudar o valor da span do relatorio  */

function select_relatorio() {
  var valor_select_relatorio_alerta = document.getElementById("select_dashD").value

if (valor_select_relatorio_alerta == "mes") {
    
    Temperatura_min.innerHTML = `Temperatura Miníma do Mês: <span id="Temp_min"></span>`
    Temperatura_med.innerHTML = `Temperatura Média do Mês: <span id="Temp_med"></span>`
    Temperatura_max.innerHTML = `Temperatura Máxima do Mês: <span id="Temp_max"></span>`

    Umidade_min.innerHTML = `Umidade Miníma do Mês: <span id="Umid_min"></span>`
    Umidade_med.innerHTML = `Umidade Média do Mês: <span id="Umid_med"></span>`
    Umidade_max.innerHTML = `Umidade Máxima do Mês: <span id="Umid_max"></span>`
  } else {   
    Temperatura_min.innerHTML = `Temperatura Miníma do dia: <span id="Temp_min"></span>`
    Temperatura_med.innerHTML = `Temperatura Média do dia: <span id="Temp_med"></span>`
    Temperatura_max.innerHTML = `Temperatura Máxima do dia: <span id="Temp_max"></span>`

    Umidade_min.innerHTML = `Umidade Miníma do dia: <span id="Umid_min"></span>`
    Umidade_med.innerHTML = `Umidade Média do dia: <span id="Umid_med"></span>`
    Umidade_max.innerHTML = `Umidade Máxima do dia: <span id="Umid_max"></span>`
  }

} 

function click1(){
  document.getElementById("corTemp1").value
  document.getElementById("valorTemp1").value
  document.getElementById("corUmi1").value
  document.getElementById("valorUmi1").value

  corTemp1.style.backgroundColor = "#70ad47"
  valorTemp1.innerHTML = 20
  corUmi1.style.backgroundColor = "#70ad47"
  valorUmi1.innerHTML = 74
}

function click2(){
  document.getElementById("corTemp2").value
  document.getElementById("valorTemp2").value
  document.getElementById("corUmi2").value
  document.getElementById("valorUmi2").value

  corTemp2.style.backgroundColor = "#70ad47"
  valorTemp2.innerHTML = 21
  corUmi2.style.backgroundColor = "#8ea9db"
  valorUmi2.innerHTML = 54
}

function click3(){
  document.getElementById("corTemp3").value
  document.getElementById("valorTemp3").value
  document.getElementById("corUmi3").value
  document.getElementById("valorUmi3").value

  corTemp3.style.backgroundColor = "#22f085"
  valorTemp3.innerHTML = 17
  corUmi3.style.backgroundColor = "#70ad47"
  valorUmi3.innerHTML = 76
}

function click4(){
  document.getElementById("corTemp4").value
  document.getElementById("valorTemp4").value
  document.getElementById("corUmi4").value
  document.getElementById("valorUmi4").value

  corTemp4.style.backgroundColor = "#c1b700"
  valorTemp4.innerHTML = 23
  corUmi4.style.backgroundColor = "#f5741d"
  valorUmi4.innerHTML = 79
}

function click5(){
  document.getElementById("corTemp5").value
  document.getElementById("valorTemp5").value
  document.getElementById("corUmi5").value
  document.getElementById("valorUmi5").value

  corTemp5.style.backgroundColor = "#ff0000"
  valorTemp5.innerHTML = 28
  corUmi5.style.backgroundColor = "#155496"
  valorUmi5.innerHTML = 50
}

function click6(){
  document.getElementById("corTemp6").value
  document.getElementById("valorTemp6").value
  document.getElementById("corUmi6").value
  document.getElementById("valorUmi6").value

  corTemp6.style.backgroundColor = "#8ea9db"
  valorTemp6.innerHTML = 49
  corUmi6.style.backgroundColor = "#22f085"
  valorUmi6.innerHTML = 66
}

function click7(){
  document.getElementById("corTemp7").value
  document.getElementById("valorTemp7").value
  document.getElementById("corUmi7").value
  document.getElementById("valorUmi7").value

  corTemp7.style.backgroundColor = "#70ad47"
  valorTemp7.innerHTML = 19
  corUmi7.style.backgroundColor = "#c1b700"
  valorUmi7.innerHTML = 78
}

function click8(){
  document.getElementById("corTemp8").value
  document.getElementById("valorTemp8").value
  document.getElementById("corUmi8").value
  document.getElementById("valorUmi8").value

  corTemp8.style.backgroundColor = "#f5741d"
  valorTemp8.innerHTML = 26
  corUmi8.style.backgroundColor = "#ff0000"
  valorUmi8.innerHTML = 80
}
