const btn = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu-principal");

function ouvrirFermer(ouvert) {
    btn.setAttribute("aria-expanded", String(ouvert)); // État annoncé aux lecteurs d'écran
    menu.classList.toggle("is-open", ouvert);           // Classe CSS pilote la visibilité
}

if (btn && menu) {
    btn.addEventListener("click", () => {
        const estFerme = btn.getAttribute("aria-expanded") === "false";
        ouvrirFermer(estFerme);
    });

    // Échap ferme et redonne le focus au bouton
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menu.classList.contains("is-open")) {
            ouvrirFermer(false);
            btn.focus();
        }
    });

    // Un clic à l'extérieur ferme le menu
    document.addEventListener("click", (e) => {
        if (menu.classList.contains("is-open") && !e.target.closest("nav")) {
            ouvrirFermer(false);
        }
    });
}