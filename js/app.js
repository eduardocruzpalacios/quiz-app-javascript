/* 
Usuario pulsa inicio
    cliente comprueba usuario introducido nombre
        no
            alert
        sí
            oculta .start
            muestra .quiz-container
*/

const nombre = document.getElementById("nombre");
const startGame = document.getElementById("start-game");

startGame.addEventListener("click", () => {
    const nombreValue = nombre.value;
    if (nombreValue !== '') {
        document.querySelector('.start').classList.toggle('hide');
        document.querySelector('.quiz-container').classList.toggle('show');
    } else {
        alert("Debes poner un nombre para comenzar el juego");
    }
});

// almacenar en constantes los elementos que tendrán el texto de pregunta y respuestas
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// almacenar en constante el botón contestar
const submitBtn = document.getElementById("submit");
// almacenar en variable el valor del index para el objeto que tiene preguntas
let currentQuiz = 0;
// declarar e iniciar conteo respuestas correctas y erróneas
let correctas = 0;
let erroneas = 0;
// almacenar en constantes los elementos con class="answer" (input)
const answerEls = document.querySelectorAll(".answer");

// ejecutar función coge datos 1 instancia objeto y los mete en h2 y label
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// función que almacena id del input seleccionado en variable answer (no seleccionado -> answer=undefined;)
function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// función deseleccionar opción elegida usuario pregunta previa

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

/*
el usuario contesta una pregunta
    cliente revisa answer
        si seleccionada y hay más preguntas disponibles
            aumenta el index del objeto y carga sus datos
        si seleccionada y no más preguntas
            oculta .quiz-container
            muestra .summary
            ejecuta lluvia iconos
        no seleccionada
            alert
*/
submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    // console.log(answer); // comprobar por consola que coge el valor

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            correctas++;
            alert("¡RESPUESTA CORRECTA!\n\nCORRECTAS = " + correctas + "\n\nERRÓNEAS = " + erroneas);
        } else {
            erroneas++;
            alert("¡RESPUESTA ERRÓNEA!\n\nCORRECTAS = " + correctas + "\n\nERRÓNEAS = " + erroneas);
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.querySelector('.quiz-container').classList.toggle('show');
            document.querySelector('.summary').classList.toggle('show');
            // hace que la función se ejecute cada X tiempo
            setInterval(createIcon, 300);

            const nombreValue = nombre.value;
            // console.log(nombreValue);
            document.getElementById("mostrarNombre").innerHTML = nombreValue;
            // console.log(correctas);
            document.getElementById("mostrarCorrectas").innerHTML = correctas;
            // console.log(erroneas);
            document.getElementById("mostrarErroneas").innerHTML = erroneas;

            const puntuacion = (correctas * 100) - (erroneas * 50);
            // console.log(puntuacion);
            document.getElementById("mostrarPuntuacion").innerHTML = puntuacion;
        }
    } else {
        alert("Debe seleccionar una opción");
    }
});