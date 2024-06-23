const iniciar = document.getElementById('iniciar');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

iniciar.addEventListener('click', function(event) {
  event.preventDefault();

const email = emailInput.value;
const password = passwordInput.value;

    // Verifica se há algum usuário cadastrado
let userFound = false;

    // Itera pelos itens do localStorage para encontrar o usuário com o email
for (let i = 0; i < localStorage.length; i++) {
const key = localStorage.key(i);
if (key.startsWith('userData-')) { 
    // Verifica se a chave começa com 'userData-'
const userDataString = localStorage.getItem(key);
const userData = JSON.parse(userDataString);
if (userData.email === email) {
    // Validação
if (password === userData.password) {
    // Redireciona para a próxima página
    window.location.href = 'main_page.html';
    userFound = true;
    break;
      } else {
        alert('Email ou senha inválidos!');
        userFound = true;
        break;
      }
    }
  }
}

// Se o usuário não foi encontrado
if (!userFound) {
  alert('Nenhum usuário cadastrado com esse email!');
}
});