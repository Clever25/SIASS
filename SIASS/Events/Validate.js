function mostrarSenha() {

	var senha = document.getElementById("senha");
	if (senha.type === "password") {
		senha.type = "text";
	} else {

		senha.type = "password";
	}
}


function validarLogin() {

	var usuario = document.getElementById('usuario').value;
	var senha = document.getElementById('senha').value;
	var done = 0;

	if (usuario == "admin" && senha == "admin") {
		//trocar caminho para a index
		window.location = "../Forms/Cadastro_Artesao.html";
		done = 1;
	} if (done == 0) {

		alert("Usuario ou senha invalidos");
	}
}

// Pega o modelo da div
var modal = document.getElementById('id01');
console.log(event);
console.log(modal);
//Quando se clicar fora do modelo, a tela se fechara automaticamente
window.onclick = function (event) {
	console.log(event);
	if (event.target == modal) {
		console.log(event);
		modal.style.display = "none";
	}
	console.log(event);
}