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

// Adicionar eventos oninput para cada campo
email.addEventListener("input", validateEmailInput);
confirmEmail.addEventListener("input", validateConfirmEmailInput);
password.addEventListener("input", validatePasswordInput);
confirmPassword.addEventListener("input", validateConfirmPasswordInput);
recover.addEventListener("input", validateRecoverInput);

// Função para validar o email em tempo real
function validateEmailInput() {
  if (!validateEmail(email.value)) {
    emailError.textContent = "Por favor, insira um e-mail válido.";
    emailError.classList.add("show");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("show");
  }
}

// Função para validar a confirmação do email em tempo real
function validateConfirmEmailInput() {
  if (email.value !== confirmEmail.value) {
    confirmEmailError.textContent = "Os e-mails não coincidem.";
    confirmEmailError.classList.add("show");
  } else {
    confirmEmailError.textContent = "";
    confirmEmailError.classList.remove("show");
  }
}

// Função para validar a senha em tempo real
function validatePasswordInput() {
  if (password.value.length < 8) {
    passwordError.textContent = "A senha deve ter no mínimo 8 caracteres.";
    passwordError.classList.add("show");
  } else {
    passwordError.textContent = "";
    passwordError.classList.remove("show");
  }
}

// Função para validar a confirmação da senha em tempo real
function validateConfirmPasswordInput() {
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "As senhas não coincidem.";
    confirmPasswordError.classList.add("show");
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordError.classList.remove("show");
  }
}

// Função para validar a palavra de recuperação em tempo real
function validateRecoverInput() {
  if (recoverExists(recover.value)) {
    recoverError.textContent = "Esta palavra de recuperação já está sendo utilizada.";
    recoverError.classList.add("show");
  } else {
    recoverError.textContent = "";
    recoverError.classList.remove("show");
  }
}

// Função para validar o e-mail
function validateEmail(email) {
  // Expressão regular para validação de e-mail
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Função para verificar se o email já existe no localStorage
function emailExists(email) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith('userData-')) {
      let userData = JSON.parse(localStorage.getItem(key));
      if (userData.email === email) {
        return true;
      }
    }
  }
  return false;
}

// Função para verificar se a palavra de recuperação já existe no localStorage
function recoverExists(recover) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith('userData-')) {
      let userData = JSON.parse(localStorage.getItem(key));
      if (userData.recover === recover) {
        return true;
      }
    }
  }
  return false;
}

// Função para lidar com o envio do formulário (verificar email e palavra de recuperação)
form.addEventListener("submit", function(event) {
  // Ocultar todas as mensagens de erro
  emailError.classList.remove("show");
  passwordError.classList.remove("show");
  confirmEmailError.classList.remove("show");
  confirmPasswordError.classList.remove("show");
  recoverError.classList.remove("show");

  // Validar campos
  let isValid = true;

  // Validação de E-mail
  if (!validateEmail(email.value)) {
    emailError.textContent = "Por favor, insira um e-mail válido.";
    isValid = false;
    emailError.classList.add("show"); // Adiciona a classe 'show'
  }

  // Validação de Confirmação de E-mail
  if (email.value !== confirmEmail.value) {
    confirmEmailError.textContent = "Os e-mails não coincidem.";
    isValid = false;
    confirmEmailError.classList.add("show"); // Adiciona a classe 'show'
  }

  // Validação de Senha
  if (password.value.length < 8) {
    passwordError.textContent = "A senha deve ter no mínimo 8 caracteres.";
    isValid = false;
    passwordError.classList.add("show"); // Adiciona a classe 'show'
  }

  // Validação de Confirmação de Senha
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "As senhas não coincidem.";
    isValid = false;
    confirmPasswordError.classList.add("show"); // Adiciona a classe 'show'
  }

  // Se os dados forem válidos, verificar se o email e a palavra de recuperação já existem
  if (isValid) {
    // Verificar se o email já existe no localStorage
    if (emailExists(email.value)) {
      emailError.textContent = "Um usuário com este e-mail já existe.";
      isValid = false;
      emailError.classList.add("show"); // Adiciona a classe 'show'
    }

    // Verificar se a palavra de recuperação já existe no localStorage
    if (recoverExists(recover.value)) {
      recoverError.textContent = "Esta palavra de recuperação já está sendo utilizada.";
      isValid = false;
      recoverError.classList.add("show"); // Adiciona a classe 'show'
    }

    // Se ambos os campos forem válidos, criar o usuário
    if (isValid) {
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

      // Salvar no localStorage
      localStorage.setItem(`userData-${nextId}`, JSON.stringify(userData));
      console.log("Dados salvos no localStorage");

      // Exibir uma mensagem de sucesso (opcional)
      alert("Dados salvos com sucesso!");

      // Limpar os campos do formulário
      email.value = "";
      password.value = "";
      confirmEmail.value = "";
      confirmPassword.value = "";
      recover.value = "";
    }
  }

  // Prevenir o envio do formulário se houver erros
  if (!isValid) {
    event.preventDefault();
  }
});