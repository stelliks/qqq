const body = document.querySelector('.body')
const btn = document.querySelector('.game')
btn.addEventListener('click', () => {
    body.style.display = 'block'
    btn.style.display = 'none'


    const thisIsDot = document.querySelector('.this_is_dot')
    const thisIsDot2 = document.querySelector('.this_is_dot2')
    const thisIsDot3 = document.querySelector('.this_is_dot3')
    const thisIsDot4 = document.querySelector('.this_is_dot4')
    const thisIsDot5 = document.querySelector('.this_is_dot5')
    const thisIsDot6 = document.querySelector('.this_is_dot6')
    const thisIsDot7 = document.querySelector('.this_is_dot7')
    const thisIsDot8 = document.querySelector('.this_is_dot8')
    const helicopter = document.querySelector('.helicopter')
    const screamSamko = document.querySelector('.scream')
    
    
    function move() {
        thisIsDot.classList.toggle('dot_active')
        thisIsDot2.classList.toggle('dot_active2')
        thisIsDot3.classList.toggle('dot_active3')
        thisIsDot4.classList.toggle('dot_active4')
        thisIsDot5.classList.toggle('dot_active5')
        thisIsDot6.classList.toggle('dot_active6')
        thisIsDot7.classList.toggle('dot_active7')
        thisIsDot8.classList.toggle('dot_active8')
    }
    
    
    setInterval(move, 300)
    
    
    
    function helic() {
        helicopter.classList.toggle('helicopter_active')
    
    }
    setInterval(helic, 400)
    
    
    function soundClick() {
        let audio = new Audio();
        audio.src = './scream_mus.mp3';
        audio.preload = 'auto';
        audio.play();
    }
    function screamer() {
        screamSamko.classList.add('scream_active')
        soundClick()
    }
    setTimeout(screamer, 8000)
    
    
})






