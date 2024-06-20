const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmEmail = document.getElementById("confirmEmail");
const confirmPassword = document.getElementById("confirmPassword");
const recover = document.getElementById("recover");

// Mensagens de erro
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmEmailError = document.getElementById("confirmEmailError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const recoverError = document.getElementById("recoverError");

form.addEventListener("submit", function(event) {
// Limpar mensagens de erro anteriores
emailError.textContent = "";
passwordError.textContent = "";
confirmEmailError.textContent = "";
confirmPasswordError.textContent = "";
recoverError.textContent = "";

// Validar campos
let isValid = true;

// Validação de E-mail
if (!validateEmail(email.value)) {
  emailError.textContent = "Por favor, insira um e-mail válido.";
  isValid = false;
}

// Validação de Confirmação de E-mail
if (email.value !== confirmEmail.value) {
  confirmEmailError.textContent = "Os e-mails não coincidem.";
  isValid = false;
}

// Validação de Senha
if (password.value.length < 8) {
  passwordError.textContent = "A senha deve ter no mínimo 8 caracteres.";
  isValid = false;
}

// Validação de Confirmação de Senha
if (password.value !== confirmPassword.value) {
  confirmPasswordError.textContent = "As senhas não coincidem.";
  isValid = false;
}

// Se os dados forem válidos, salvar no localStorage
if (isValid) {
 console.log("isValid:", isValid);

// Gerar um ID único (simplesmente um contador nesse caso)
let nextId = localStorage.getItem('nextId') || 0;
nextId = parseInt(nextId, 10) + 1;
localStorage.setItem('nextId', nextId.toString());

// Criar um objeto com os dados
const userData = {
  id: nextId,
  email: email.value,
  password: password.value,
  recover: recover.value
};

console.log("userData:", userData);

// Salvar no localStorage
localStorage.setItem(`userData-${nextId}`, JSON.stringify(userData));
console.log("Dados salvos no localStorage");

// Exibir uma mensagem de sucesso (opcional)
alert("Dados salvos com sucesso!");
} else {
// Prevenir o envio do formulário se houver erros
event.preventDefault();
}
});


// Função para validar o e-mail
function validateEmail(email) {
// Expressão regular para validação de e-mail
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(email);
}



