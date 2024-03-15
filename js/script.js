function atualizarNome() {
  let inputName = document.querySelector("#inputName").value;

  document.querySelector("#nome-proprietario").innerHTML = inputName.toUpperCase()

  if(inputName == "") {
    document.querySelector("#nome-proprietario").innerHTML = "JANE APPLESEED"
  }

}