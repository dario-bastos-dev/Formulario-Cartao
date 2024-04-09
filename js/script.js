//Aplicando mascara JQuery
$(document).ready(function() {
  $("#inputCardNumber").mask("0000 0000 0000 0000")

  $("input.cvc").mask("000")

  $("input.data-mes").mask("00")
  $("input.data-ano").mask("00")
})

// Adicionando o Nome do Proprietário
let inputName = document.querySelector("#inputName");

inputName.addEventListener("keyup", atualizarName);
inputName.addEventListener("keyup", verificarNome);

//Função para atualizar nome
function atualizarName() {
  let inputNameValue = document.querySelector("#inputName").value;

  document.querySelector("#nome-proprietario").innerHTML = inputNameValue.toUpperCase();

    if (inputNameValue == "") {
      document.querySelector("#nome-proprietario").innerHTML = "JANE APPLESEED";
    };
}

//Verificação do nome
function verificarNome() {
  let value = document.querySelector("#inputName").value;

  let h6 = document.querySelector("h6.area-1")
  let input = document.querySelector("input.input-1")

  if(value == "" || value.length < 16 || value.match(/\d/)) {
    h6.classList.remove("hide")
    input.classList.add("input-border")
    return false
    
  } else {
    h6.classList.add("hide")
    input.classList.remove("input-border")
    return true
  }
}

// Adicionando o Número do Cartão
let inputNumb = document.querySelector("#inputCardNumber");

inputNumb.addEventListener("keyup", atualizarNumb);
inputNumb.addEventListener("keyup", verificarNumero);

//Função para atualizar o número
function atualizarNumb() {
  let key = document.querySelector("#inputCardNumber").value;

  document.querySelector("#numero-cartao #area").innerHTML = key;

  if(key == "") {
    document.querySelector("#numero-cartao #area").innerHTML = "0000 0000 0000 0000";
  } 
  
}

//Verificação do número
function verificarNumero() {
  let value = document.querySelector("#inputCardNumber").value;

  let h6 = document.querySelector("h6.area-2")
  let input = document.querySelector("input.input-4")

  if(value == "" || value.length < 16) {
    h6.classList.remove("hide")
    input.classList.add("input-border")
    return false
    
  } else {
    h6.classList.add("hide")
    input.classList.remove("input-border")
    return true
  }
}

//Adicionado a data e ano do Cartão
let inputMes = document.querySelector(`div input.data-mes`)
let inputAno = document.querySelector(`div input.data-ano`)

inputMes.addEventListener(`keyup`, atualizarData)
inputAno.addEventListener(`keyup`, atualizarData)

inputMes.addEventListener(`keyup`, verificarData)
inputAno.addEventListener(`keyup`, verificarData)

//Função para atualizar a data
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

//Verificação da data
function verificarData() {
  let mes = document.querySelector(`.data-mes`).value
  let ano = document.querySelector(`.data-ano`).value

  let h6 = document.querySelector("h6.area-3")
  let input = document.querySelector("input.input-2")
  let input2 = document.querySelector("input.input5")

  if(mes == "" || mes.length < 2) {
    h6.classList.remove("hide")
    input.classList.add("input-border")
    return false
    
  } else if (ano == "" || ano.length < 2) {
    h6.classList.remove("hide")
    input2.classList.add("input-border")
    return false
    
  } else {
    h6.classList.add("hide")
    input2.classList.remove("input-border")
    input.classList.remove("input-border")

    return true
  }
}

//Adicionando o CVC do Cartão
let inputCVC = document.querySelector(`input.cvc`)

inputCVC.addEventListener(`keyup`, atualizarCVC)
inputCVC.addEventListener(`keyup`, verificarCVC)

//Função para atualizar o CVC
function atualizarCVC() {
  let cvc = document.querySelector(`input.cvc`).value

  if(cvc == ``) {
    document.querySelector(`#cartao-tras div #codigo-cartao`).innerHTML = `000`
  } else {
    document.querySelector(`#cartao-tras div #codigo-cartao`).innerHTML = cvc
  }

}

//Verificação do CVC
function verificarCVC() {
  let cvc = document.querySelector(`input.cvc`).value

  let h6 = document.querySelector("h6.area-4")
  let input = document.querySelector("input.input-3")

  if(cvc == "" || cvc.length < 3) {
    h6.classList.remove("hide")
    input.classList.add("input-border")
    return false
    
  } else {
    h6.classList.add("hide")
    input.classList.remove("input-border")
    return true
  }
}

// Adicionando verificação dos valores dos inputs
let btn = document.querySelector("div button.btn")

btn.addEventListener("click", function() {
  let nome = verificarNome()
  let numero = verificarNumero()
  let data = verificarData()
  let cvc = verificarCVC()

  let btn = document.querySelector("button a.enviar")
  

  if(nome == false || numero == false || data == false || cvc == false) {
    btn.removeAttribute("href")
  } else {
    btn.setAttribute("href", "./html/obrigado.html")

  }
})

