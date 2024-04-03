// Adicionando o Nome do Proprietário
let inputName = document.querySelector("#inputName");

inputName.addEventListener("keyup", atualizarName);
//-------------------
function atualizarName() {
  let inputNameValue = document.querySelector("#inputName").value;

  document.querySelector("#nome-proprietario").innerHTML = inputNameValue.toUpperCase();

    if (inputNameValue == "") {
      document.querySelector("#nome-proprietario").innerHTML = "JANE APPLESEED";
    };
}

// Adicionando o Número do Cartão
let inputNumb = document.querySelector("#inputCardNumber");

inputNumb.addEventListener("keyup", atualizarNumb, );

//Aplicando mascara JQuery
$(document).ready(function() {
  $("#inputCardNumber").mask("0000 0000 0000 0000")

  $("input.cvc").mask("000")
})

//---------------------
function atualizarNumb() {
  let key = document.querySelector("#inputCardNumber").value;

  document.querySelector("#numero-cartao #area").innerHTML = key;

  if(key == "") {
    document.querySelector("#numero-cartao #area").innerHTML = "0000 0000 0000 0000";
  } 
  
}

//Adicionado a data e ano do Cartão
let inputMes = document.querySelector(`div input.data-mes`)
let inputAno = document.querySelector(`div input.data-ano`)

inputMes.addEventListener(`keyup`, atualizarData)
inputAno.addEventListener(`keyup`, atualizarData)
//----------------------------
function atualizarData() {
  let mes = document.querySelector(`.data-mes`).value
  let ano = document.querySelector(`.data-ano`).value

  if(mes > `31`) {
    document.querySelector(`#proprietario-data #data-cartao`).innerHTML = `00/${ano}`

  } else if(mes == ``) {
    document.querySelector(`#proprietario-data #data-cartao`).innerHTML = `00/${ano}`

  } else if(ano == ``) {
    document.querySelector(`#proprietario-data #data-cartao`).innerHTML = `${mes}/00`
  }
  
  else {
    document.querySelector(`#proprietario-data #data-cartao`).innerHTML = `${mes}/${ano}`

  }
}

//Adicionando o CVC do Cartão
let inputCVC = document.querySelector(`input.cvc`)

inputCVC.addEventListener(`keyup`, atualizarCVC)

function atualizarCVC() {
  let cvc = document.querySelector(`input.cvc`).value

  if(cvc == ``) {
    document.querySelector(`#cartao-tras div #codigo-cartao`).innerHTML = `000`
  } else {
    document.querySelector(`#cartao-tras div #codigo-cartao`).innerHTML = cvc
  }

}