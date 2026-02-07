const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainPage = document.getElementById("mainPage");
const music = document.getElementById("music");

let tapIntensity = 0;
let rainInterval = null;

// 👉 yaha naam daal
const crushName = "IMZUUU JII";

startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    mainPage.classList.remove("hidden");
    music.play();
});

document.addEventListener("click", handleTap);
document.addEventListener("touchstart", handleTap);

function handleTap() {
    tapIntensity += 3;

    if (!rainInterval) startRain();

    setTimeout(() => {
        tapIntensity = Math.max(0, tapIntensity - 2);
        if (tapIntensity === 0) stopRain();
    }, 500);
}

function startRain() {
    rainInterval = setInterval(() => {
        for (let i = 0; i < tapIntensity; i++) {
            createFlower();
        }
    }, 200);
}

function stopRain() {
    clearInterval(rainInterval);
    rainInterval = null;
}

function createFlower() {
    const el = document.createElement("div");
    el.classList.add("rose");

    // 70% flower, 30% name
    if (Math.random() < 0.7) {
        el.innerHTML = Math.random() > 0.5 ? "🌹" : "🌸";
    } else {
        el.innerHTML = crushName;
        el.style.fontSize = "18px";
        el.style.fontWeight = "bold";
        el.style.color = "#fff";
        el.style.textShadow = "0 0 8px #ff4d6d";
    }

    el.style.left = Math.random() * 100 + "vw";

    const duration = Math.random() * 3 + 4;
    el.style.animationDuration = duration + "s";

    document.body.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, duration * 1000);
}
