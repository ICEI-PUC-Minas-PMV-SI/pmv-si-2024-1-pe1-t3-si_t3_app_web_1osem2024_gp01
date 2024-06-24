const actionItems = document.querySelectorAll('.action-item');

actionItems.forEach(item => {
  item.addEventListener('click', () => {
    const action = item.dataset.action;

    switch (action) {
      case 'refresh':
        window.location.reload(); // Recarrega a página
        break;
      case 'fullscreen':
        if (document.fullscreenElement) {
          document.exitFullscreen(); // Sai do modo de tela cheia
        } else {
          document.documentElement.requestFullscreen(); // Entra no modo de tela cheia
        }
        break;
    }
  });
});

// Define o cursor de click
document.getElementById('refresh').style.cursor = 'pointer';
document.getElementById('fullscreen').style.cursor = 'pointer';