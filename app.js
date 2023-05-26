let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let message = " ";

let leftDice = document.querySelector(".img1");
leftDice.setAttribute("src", `dice${randomNumber1}.png`);

let rightDice = document.querySelector(".img2");
rightDice.setAttribute("src", `dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    message = "Player 1 Wins! 🚩";
}
else if (randomNumber1 < randomNumber2) {
    message = "🚩 Player 2 Wins!";
}
else {
    message = "Draw";
}

let heading = document.querySelector("h1");
heading.textContent = message;
