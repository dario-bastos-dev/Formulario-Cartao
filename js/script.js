//Class do Cartão de crédito
class Cartao {

  // Function para adicionar o nome
  setNomeProprietario(v) {
    

    document.querySelector("#nome-proprietario").innerHTML =
      v.toUpperCase();

    if (v == "") {
      document.querySelector("#nome-proprietario").innerHTML = "JANE APPLESEED";
    }
  }

  //Function para adicionar o número
  setNumero(v) {

    
  }
}

//Instanciando a class
const cartao = new Cartao();

// Adicionando o Nome do Proprietário
let inputName = document.querySelector("#inputName");

inputName.addEventListener("keyup", atualizarName);
//-------------------
function atualizarName() {

  let inputNameValue = document.querySelector("#inputName").value;

  cartao.setNomeProprietario(inputNameValue)
}

// Adicionando o Número do Cartão
let inputNumb = document.querySelector("#inputCardNumber");

inputNumb.addEventListener("keyup", atualizarNumb);
//---------------------
function atualizarNumb() {
  let key = document.querySelector("#inputCardNumber").value;

  let numb = cartao.setNumero(key)
}