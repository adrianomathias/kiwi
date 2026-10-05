const botaoClaro = document.getElementById('tema-claro');
const botaoEscuro = document.getElementById('tema-escuro');
const videoFundo = document.getElementById('video-fundo');

botaoClaro.addEventListener('click', () => {
    document.body.classList.add('modo-claro');
    videoFundo.src = 'second_video.mp4';
});

botaoEscuro.addEventListener('click', () => {
    document.body.classList.remove('modo-claro');
    videoFundo.src = 'main_video.mp4';
});