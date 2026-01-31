(function() {
  // On récupère le userAgent actuel
  const ua = navigator.userAgent;

  // On vérifie si la signature "StreamixApp" est présente n'importe où dans la chaîne
  // L'utilisation de .includes() est parfaite ici car elle détecte "StreamixApp"
  // même si elle est perdue au milieu d'autres informations (Chrome, Windows, etc.)
  const isStreamix = ua.includes('StreamixApp');

  // Log de debug optionnel (tu peux le supprimer après tes tests)
  console.log("Vérification de sécurité Streamix...");

  if (!isStreamix) {
    console.error("Accès refusé : Signature StreamixApp manquante.");
    // Arrête le chargement immédiatement
    window.stop();
    // Redirige vers la page d'erreur
    window.location.replace('denied.html');
  } else {
    console.log("Accès autorisé : Bienvenue sur Streamix.");
  }
})();
