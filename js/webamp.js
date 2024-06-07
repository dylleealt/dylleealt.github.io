// $("#button").click(function () {
const Webamp = window.Webamp;

if (Winamp.browserIsSupported()) {
    new Webamp({
        availableSkins: [
            {
                url: "/assets/webamp/ducks_in_a_row.wsz",
                name: "Ducks in a row",
            },
            {
                url: "/assets/webamp/pokemon_silver.wsz",
                name: "Pokemon",
            },
            {
                url: "/assets/webamp/calvin_and_hobbes.wsz",
                name: "Calvin and Hobbes",
            },
        ],

        initialSkin: {
            url: "/assets/webamp/ducks_in_a_row.wsz",
        },
    }).renderWhenReady(document.getElementById("webamp-container"));
} else {
    // Perhaps you could show some simpler player in this case.
}
// });
