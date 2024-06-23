const perfilElement = document.querySelector('.perfil');
const userInfoElement = document.querySelector('.user-info');

perfilElement.addEventListener('click', toggleUserInfo); 

function showUserInfo() {
    userInfoElement.innerHTML = '';

    for (let key in localStorage) {
        if (key.startsWith('userData-')) {
            const user = JSON.parse(localStorage.getItem(key));
            userInfoElement.innerHTML += `
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <hr>
            `;
        }
    }

    if (userInfoElement.innerHTML !== '') {
        userInfoElement.style.display = 'block';
    } else {
        alert('Não há usuários armazenados no localStorage.');
    }
}

function toggleUserInfo() {
    const userInfoElement = document.querySelector('.user-info');

    if (userInfoElement.style.display === 'block') {
        userInfoElement.style.display = 'none';
    } else {
        showUserInfo(); 
    }
}