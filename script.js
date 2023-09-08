let qS = x => document.querySelector(x);
let qSA = x => document.querySelectorAll(x);
let clickArray = qSA('.key');

document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLowerCase());
});

qS('button').addEventListener('click', () => {
    let song = qS('#input').value;
    let stop = 0;

    if(song !== '') {
        let songArray = song.split('');

        for(let i in songArray) {
            setTimeout(() => {
                playSound(`key${songArray[i]}`); 
            }, stop);
            stop += 350; 
        };
    }
});

clickArray.forEach((c) => {
    c.addEventListener('click', () => {
        let clickKey = c.getAttribute('data-key');
        playSound(clickKey);
    });
});

function playSound(sound) {
    let audioElement = qS(`#s_${sound}`);
    let keyElement = qS(`.key[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    };

    if(keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
};