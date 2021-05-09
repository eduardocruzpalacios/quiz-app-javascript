/* función para LLUVIA ICONOS, hay que ejecutarla cada x tiempo: setInterval(createIcon, 300); */

function createIcon() {

    const box = document.createElement("img");
    // fuente img https://www.flaticon.com/free-icon/trophy_3112946
    box.setAttribute("src", "img/trophy.svg");

    // (para elemento img) tener atributo left= ; con valor 0-100vh
    box.style.left = Math.random() * 100 + "vw";

    // (para elemento img) atributo animationDuration con valor 3-4s
    box.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 5000);
}