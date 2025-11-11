// This file implements the audio-reactive visualizer tied to instrument icons, allowing for interactive audio feedback based on user input.

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const instrumentIcons = document.querySelectorAll('.instrument-icon');

function setupAudio() {
    const audioElement = document.getElementById('audio');
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;
}

function drawVisualizer() {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    requestAnimationFrame(drawVisualizer);
    analyser.getByteFrequencyData(dataArray);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
    }
}

function init() {
    setupAudio();
    drawVisualizer();
}

instrumentIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        audioContext.resume().then(() => {
            const audioElement = document.getElementById('audio');
            audioElement.play();
        });
    });
});

window.onload = init;