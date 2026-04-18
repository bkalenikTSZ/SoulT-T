/*===========================   NEWS    ===========================*/
// Run code after page content is loaded
document.addEventListener("DOMContentLoaded", () => {

    // Dohvati element input polja za pretragu
    const searchInput = document.getElementById("news-search");
    // Trenutni filter po igri (default: sve igre)
    let currentGameFilter = "all";

    // Dohvati sve gumbe za filter po igri
    const buttons = document.querySelectorAll(".filter-btn");

    // Dodaj klik listener za svaki gumb filtera
    buttons.forEach(button => {
        button.addEventListener("click", () => {

            // Osvježi aktivni gumb (oznaka korisničkog izbora)
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Postavi trenutni filter po igri na odabranu igru
            currentGameFilter = button.dataset.game;
            // Primijeni filtere i search
            applyFilters();
        });
    });

    // Handle live search input
    searchInput.addEventListener("input", () => {
        applyFilters(); // Apply filters and search
    });

    // Apply both game filter and search filter
    function applyFilters() {
        // Dohvati uneseni pojam u pretrazi i pretvori u mala slova
        const query = searchInput.value.toLowerCase();

        // Dohvati sve kartice vijesti
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            // Dohvati tekst iz <p> unutar kartice
            const text = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";

            // Provjeri podudaranje s odabranom igrom
            const matchesGame = currentGameFilter === "all" || card.dataset.game === currentGameFilter;

            // Provjeri podudaranje s tekstom pretrage
            const matchesSearch = text.includes(query);

            // Prikaži karticu samo ako zadovoljava oba kriterija
            if (matchesGame && matchesSearch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});