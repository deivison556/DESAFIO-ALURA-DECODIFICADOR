var textoInput = document.querySelector('.input');
var outInput = document.querySelector('#box-inputconteudo');

// Função para criptografa o texto
function criptografarMSG() {
  var texto = textoInput.value;
  var resultadoCripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

  document.getElementById('box-inputconteudo').innerHTML = '<textarea readonly class="input">' + resultadoCripto + '</textarea>'+ '<button class="button-copia" onclick="Copiar()">Copiar</button>';
}

// Função para descriptografa o texto
function descriptografarMSG() {
  var texto = textoInput.value;
  var resultadoDescripto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

  document.getElementById('box-inputconteudo').innerHTML = '<textarea readonly class="input">' + resultadoDescripto + '</textarea>'+ '<button class="button-copia" onclick="Copiar()">Copiar</button>';

}

// Função para copiar o texto
function Copiar() {
  var TextoCopia = document.querySelector('.input');

  TextoCopia.select();
  document.execCommand('copy');
  alert("Texto foi Copiado!");
}