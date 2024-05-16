
const message = {
    dadJokesStarter : ["Why don't skeletons fight each other?",

    "What do you call cheese that isn't yours? ",

    "Why can't you hear a pterodactyl go to the bathroom? ",

    "What do you get when you cross a snowman and a vampire? ",

    "Why did the scarecrow win an award? ",

    "Why don't eggs tell jokes? ",

    "How does a penguin build its house? ",

    "What time did the man go to the dentist? ",

    "Why did the math book look sad? ",

    "Why do chicken coops only have two doors? " ],

    dadJokesPunch : ["Because they don't have the guts.", "Nacho cheese.", "Because the 'P' is silent.", "Frostbite.", "Because he was outstanding in his field.",
    "Because they might crack up.", "Igloos it together.", "Tooth hurty.", "Because it had too many problems.", "Because if they had four, they’d be chicken sedans."
    ],

    realisation : ["...Wait, I think I messed it up", "...hold on this doesn't sound right", "...I swear it sounded funnier in my head"]


};




const callDadJokes = () => {
    let x = Math.floor(Math.random() * 10);
    console.log(message.dadJokesStarter[x]);
    let y = Math.floor(Math.random() * 10);
    console.log(message.dadJokesPunch[y]);
    y = Math.floor(Math.random() * 3);
    console.log(message.realisation[y]);
};

callDadJokes();