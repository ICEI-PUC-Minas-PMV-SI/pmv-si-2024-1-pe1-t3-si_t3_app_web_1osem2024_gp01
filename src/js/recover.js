document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const recoverWordInput = document.getElementById('recoverWord');
    const recoverError = document.getElementById('recoverError');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        recoverError.textContent = '';
        resultDiv.textContent = '';

        const recoverWord = recoverWordInput.value.trim().toLowerCase();

        // Itera sobre os itens do localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); // Obtém a chave do item
            const storedData = localStorage.getItem(key);
            const userData = JSON.parse(storedData);

            // Verifica se a palavra de recuperação é correta para o usuário
            if (recoverWord === userData.recover) {
                resultDiv.textContent = `Sua senha é: ${userData.password}`;
                return; // Encontrado, sai do loop
            }
        }
        // Se a palavra de recuperação não for encontrada em nenhum item
        recoverError.textContent = 'Palavra de recuperação incorreta. Tente novamente.';
    });
});