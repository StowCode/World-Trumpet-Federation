function mobileMenu() {
    if (document.getElementById('mobilenavbar').style.display ==  'block') {
        document.getElementById('mobilenavbar').style.display = 'none';
    } else {
        document.getElementById('mobilenavbar').style.display = 'block';
    } 
}
document.getElementById('hamburger').addEventListener('click', mobileMenu);





let btn = document.getElementById('btn');
let output = document.getElementById('output')
let quotes = [
    "No.",
    "Nope.",
    "Probably not.",
    "Do you see his car parked anywhere?",
    "He said something about goat yoga...",
    "Hard to say... wait... no, it isn't!.",
    "He's 'practicing'.",
    "We can't even get him to come to rehearsals anymore!",
    "No.  That cornet isn't going to clean itself!",
    "Haven't seen him in months!",
    "What do YOU think?",
    "Definitely not.",
    "Signs point to no.",
    "Ask again later, the answer will still be 'no'.",
    "My sources say no.",
    "You can click that button all day... it's not going to change the reality of the situation.",
    "There's a better chance of Joey being wrong!",
    "His employer is asking the same thing.",
    "Don't push your luck.",
    "Nein",
    "It's a miracle he shows up for the podcast."
];

btn.addEventListener ('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length) ]
    output.innerHTML = randomQuote;
})

// Mobile Navbar Below

