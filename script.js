spl=document.getElementById('splash');

var splashes=[
    "GoGaurdian is watching...",
    "Still not blocked.",
    "Hey teacher!",
    "3kh0 clone.",
    "💀",
    "ohio.",
    "Don't wake the sleeping pills!",
    "Sponsored by NordVPN!",
    "Emo kid: 🪢",
    "69",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "one time I took an insane poop in the toilet.",
    "Whopper whopper.",
    "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
    "Minceraft.",
    "Don't click this.\nBecause it does nothing.",
    "Click this to get a new splash just like 3kh0.",
    "Game ripping is fun!",
    "Check the changelog sometimes.",
    "geometry dash 🤓",
    "New Tab"
]

function getRandomSplash() {
    return splashes[Math.floor((Math.random()*splashes.length))]
}

spl.innerHTML=getRandomSplash()