const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const cntn = document.querySelector('.cntn');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Glas je aktiviran, pricaj u mikrofon');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start()
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message; //najbitniji dio moze da se mijenja
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.speed = 0.5;
    window.speechSynthesis.speak(speech);
    cntn.textContent = speech.text;
}
