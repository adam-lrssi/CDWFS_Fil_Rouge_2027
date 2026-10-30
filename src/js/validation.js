const form = document.querySelector("#form-inscription");
const champ = document.querySelector("#courriel");
const aide = document.querySelector("#aide-courriel");

// Validation au fil de la saisie
champ.addEventListener("input", () => {
    const ok = champ.checkValidity();
    champ.setAttribute("aria-invalid", String(!ok));
    aide.textContent = ok
        ? "Elle servira d'identifiant de connexion."
        : "Format attendu : nom@domaine.fr";
});

// Validation à la soumission
form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        champ.setAttribute("aria-invalid", "true");
        aide.textContent = "Format attendu : nom@domaine.fr";
        champ.focus();
        return;
    }

    // Désactiver le bouton UNIQUEMENT si le formulaire est valide (anti-double envoi)
    const btnSubmit = form.querySelector("button[type=submit]");
    if (btnSubmit) {
        btnSubmit.disabled = true;
    }
});