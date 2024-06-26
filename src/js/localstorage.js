const perfilElement = document.querySelector('.perfil');
const userInfoElement = document.querySelector('.user-info');
const logoutButton = document.getElementById('logout-button'); // Pega o botão "Sair"

// Evento de clique para o botão "Sair"
logoutButton.addEventListener('click', function() {
  window.location.href = 'login.html'; // Redireciona para a página de login
});

// Evento de clique para o texto "ADMIN"
document.getElementById('admin').addEventListener('click', toggleUserInfo);

function showUserInfo() {
  userInfoElement.innerHTML = '';

  for (let key in localStorage) {
    if (key.startsWith('userData-')) {
      const user = JSON.parse(localStorage.getItem(key));
      userInfoElement.innerHTML += `
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <button class="delete-user" data-id="${user.id}">Remover</button>
        <hr>
      `;
    }
  }

  if (userInfoElement.innerHTML !== '') {
    userInfoElement.style.display = 'block';
  } else {
    alert('Não há usuários armazenados no localStorage.');
  }

  // Adiciona evento de click para os botões de exclusão
  const deleteButtons = document.querySelectorAll('.delete-user');
  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteUser);
  });
}

function deleteUser(event) {
  const userId = event.target.dataset.id;

  // Remove o usuário do localStorage
  localStorage.removeItem(`userData-${userId}`);

  // Atualiza a lista de usuários na página
  showUserInfo();
}

function toggleUserInfo() {
  const userInfoElement = document.querySelector('.user-info');

  if (userInfoElement.style.display === 'block') {
    userInfoElement.style.display = 'none';
  } else {
    showUserInfo();
  }
}

// Define o cursor de click
document.getElementById('admin').style.cursor = 'pointer';