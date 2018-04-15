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

	if (usuario == "admin" && senha == "admin") {
		//trocar caminho para a index
		window.location = "../Forms/Cadastro_Artesao.html";
		done = 1;
	} if (done==0) {
		
		alert("Usuario ou senha invalidos");
	}
}