/*===========================   HOME    ===========================*/
// Display a random news item in the "Just Now" section
function loadJustNow() {
    const el = document.getElementById("just-now"); // dohvaćanje elementa po ID-u
    if (!el) return;

    const randomIndex = Math.floor(Math.random() * justNowNews.length);// odabir nasumičnog indeksa
    el.textContent = justNowNews[randomIndex];                           // ažuriranje sadržaja elementa
}

// Display a random fun fact
function loadFunFact() {
    const el = document.getElementById("fun-fact");// dohvaćanje elementa po ID-u
    if (!el) return;

    const randomIndex = Math.floor(Math.random() * funFacts.length);// odabir nasumične činjenice
    el.textContent = funFacts[randomIndex];// ažuriranje sadržaja elementa
}

// List of latest news for "Just Now" section
const justNowNews = [
    "26/05/2025, Live-Action Film Adaptation Of ELDEN RING Announced"  /* https://en.bandainamcoent.eu/elden-ring/news/live-action-film-adaptation-of-elden-ring-announced */

];

// List of fun facts for the homepage
const funFacts = [
    "In Elden Ring, there are 6 different endings?",
    "Dark Souls has way more secrets that you're very unlikely to find on your own than Elden Ring.",
    "The Elden Ring DLC: Shadow of the Erdtree content can only be accessed after a certain point later in the game.",
    "In Elden Ring, not every NPC death will be in vain... all though you should still probably avoid intentionally killing them.",
    "Taking a break can genuinely improve performance and might just get you the focus you've been looking for!"
];

// Initialize dynamic content after page load
document.addEventListener("DOMContentLoaded", () => {
    loadFunFact();
    loadJustNow();
});


