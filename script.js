spl=document.getElementById('splash');

var splashes=[
    "GoGaurdian is watching...",
    "Still not blocked.",
    "Don't wake the sleeping pills!",
    "Sponsored by NordVPN!",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Minceraft.",
    "Don't click this.Because it does nothing.",
    "Check the changelog sometimes.",
    "geometry dash 🤓",
    "New Tab",
    "I know you have missing assignments.",
    "For when you're bored in class.",
    "English grade done by ChatGPT.",
    "Lawsuits sold seperately.",
    "c.ai coming soon!",
    "someone should fix page not found.",
    "gameub 2.2 before gd 2.2",
    "2.3 in 6 months!",
    "Winter update!",
    "Will work for vbucks.",
    "Best on the market.",
    "Chromebooks here are worth $20.",
    "JERRY!!",
    "Better play with fullscreen mode",
    "The teachers dont know... Or do they? *vsauce theme*",
    "3.0 release or something.",
    "I added a lot of these for this update",
    "bob man",
    "GET *FREE* ROBUX WITH MY LINK IN THE DESCRIPTION 🤑🤑💰",
    "did you know anime causes brain rot.",
    "sigma male 🗿🍷",
    "1.4 GPA activities.",
    "Josh Hutcherson",
    "super secret splash message update lol",
    "definitely not a scam.",
    "∞ games", 
    "😤😤😤🧐😔😳🫣🤔🫡💀💀💀🤜👀🫧🥛",
    "'Tetris is too easy' - 🤓",
    "Ms. Blue after watching someone have fun: 🤬",
]

function getRandomSplash() {
    return splashes[Math.floor((Math.random()*splashes.length))]
}

spl.innerHTML=getRandomSplash()