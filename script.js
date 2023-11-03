spl=document.getElementById('splash');

var splashes=[
    "GoGaurdian is watching...",
    "Still not blocked.",
    "Don't wake the sleeping pills!",
    "Sponsored by NordVPN!",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.",
    "Minceraft.",
    "Don't click this.\nBecause it does nothing.",
    "Check the changelog sometimes.",
    "geometry dash 🤓",
    "New Tab",
    "I know you have missing assignments.",
    "For when you're bored in class.",
    "Quite the site.",
    "English grade done by ChatGPT.",
    "Lawsuits sold seperately.",
    "c.ai coming soon!",
    "someone should fix page not found.",
    "gameub 2.2 before gd 2.2",
    "2.3 in 6 months!",
    "Winter update!",
    "Will work for vbucks.",
]

function getRandomSplash() {
    return splashes[Math.floor((Math.random()*splashes.length))]
}

spl.innerHTML=getRandomSplash()