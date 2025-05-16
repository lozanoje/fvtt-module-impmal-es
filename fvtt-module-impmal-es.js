Hooks.once("ready", async function () {
	console.log("language:" + game.settings.get("core", "language"))
    if (game.user.isGM && game.settings.get("core", "language") === "es") {
	  document.getElementById("logo").src="/modules/fvtt-module-impmal-es/imagenes/fvtt-impmal-es.webp";
  }
});
