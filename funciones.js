const COPY = document.querySelector("#btnCopiar");
const ENCRIPTAR = document.querySelector("#btnEncriptar");
const DESENCRIPTAR = document.querySelector("#btnDesencriptar");
const VALOR_RESULTADO = document.querySelector("#txt_area");
VALOR_INPUT = document.querySelector("#txtEncriptar");
ENCRIPTAR.addEventListener("click", controladorBotones);
DESENCRIPTAR.addEventListener("click", controladorBotones);
function controladorBotones(e) {
  var texto = document.querySelector("#txtEncriptar").value;
/* if (texto.includes('a'))
alert('asd')
  else {} */
     if (e.target.id == "btnEncriptar") {
      var texto_input = texto
       .toLowerCase()
      .trim() 
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  } else {              /* Control y Funcionamiento botones */
    var texto_input = texto
      .toLowerCase()
      .trim()
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  }
  document.getElementById("btnCopiar").style.display = "block";
  document.querySelector("#txt_area").value = texto_input;
  }
COPY.addEventListener("click", async () => {
  await navigator.clipboard.writeText(VALOR_RESULTADO.value);
  alert("Copiado!"); /* Boton Copiar text portapepeles */
});
VALOR_INPUT.addEventListener("mousemove", function () {
  if (VALOR_INPUT.value.length === 0) {
    document.getElementById("imgDescripcion").style.display = "block";
    document.getElementById("btnCopiar").style.display = "none";
    document.getElementById("txt_area").style.display = "none";
  } else {
    document.getElementById("imgDescripcion").style.display = "none";
    document.getElementById("txt_area").style.display = "block";
  }
  /* Campo Vacio deseleccionado vuelve a poner el mensaje no encontrado */
});
