// ELEMENTS
const envelope = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.getElementById("letter-window");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const title = document.getElementById("letter-title");
const cat = document.getElementById("letter-cat");
const finalText = document.getElementById("final-text");
const buttons = document.getElementById("letter-buttons");

const endContainer = document.getElementById("end-container");


// STATE VARIABLES
let yesClickCount = 0;
let finished = false;



// OPEN ENVELOPE
envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letterContainer.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);

});



// NO BUTTON RUNS AWAY
noBtn.addEventListener("mouseenter", () => {

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

});



// YES BUTTON LOGIC
yesBtn.addEventListener("click", (e) => {

    // prevent triggering screen click event
    e.stopPropagation();

    if (finished) return;

    yesClickCount++;

    // grow effect each click
    const scaleSize = 1 + (yesClickCount * 0.4);
    yesBtn.style.transform = `scale(${scaleSize})`;


    // on 3rd click → show final state
    if (yesClickCount >= 3) {

        finished = true;

        title.innerText = "Yippeeee!";

        cat.src = "cat_dance.GIF";

        buttons.style.display = "none";

        finalText.style.display = "block";

    }

});



// CLICK ANYWHERE AFTER FINISHED → SHOW END.PNG LIKE ENVELOPE
document.addEventListener("click", () => {

    if (finished) {

        letterContainer.style.display = "none";

        endContainer.style.display = "flex";

    }

});
