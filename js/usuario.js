class Usuario {

  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  mostrarInfo() {
    return this.nombre + " — " + this.email;
  }

}

function crearUsuario() {

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  const usuario = new Usuario(nombre, email);

  document.getElementById("info").textContent =
    "Usuario creado: " + usuario.mostrarInfo();
}