const factButton = document.querySelector("#factButton");
const factOutput = document.querySelector("#factOutput");

const facts = [
    "I enjoy building websites and learning JavaScript.",
    "I also create YouTube thumbnails and edit videos.",
    "I am currently improving my front-end development skills.",
    "I enjoy combining web development with graphic design."
];

if (factButton && factOutput) {
    factButton.addEventListener("click", function () {
        const randomNumber = Math.floor(Math.random() * facts.length);
        factOutput.textContent = facts[randomNumber];
    });
}
