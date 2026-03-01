class Calculadora {

  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

}

const calc = new Calculadora();

function sumar() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  document.getElementById("resultado").textContent =
    "Resultado: " + calc.sumar(n1, n2);
}

function restar() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  document.getElementById("resultado").textContent =
    "Resultado: " + calc.restar(n1, n2);
}