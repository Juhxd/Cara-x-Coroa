let Cara = 0;
let Coroa = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
                Cara++;
    } else {
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        Coroa++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#heads-count").textContent = `Cara: ${Cara}`;
    document.querySelector("#tails-count").textContent = `Coroa: ${Coroa}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    Cara = 0;
    Coroa = 0;
    updateStats();
})