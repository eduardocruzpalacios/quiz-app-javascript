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

/*
datos preguntas y respuestas
    son 10 objetos que tienen estas propiedades
        1 pregunta
        4 respuetas
        1 correcta
*/
const quizData = [{
        question: '1.- ¿Cuál es el vínculo entre Java y JavaScript?',
        a: 'Java viene de JavaScript',
        b: 'JavaScript viene de Java',
        c: 'Los 4 primeros caracteres',
        d: 'Java + directiva "use strict" = JavaScript',
        correct: 'c',
    },

    {
        question: '2.- Sobre HTML y CSS...',
        a: 'HTML para estructura y contenido. CSS para layout y estilo',
        b: 'HTML y CSS no es programar',
        c: 'No <link rel="stylesheet" href="styles.css">, no gain',
        d: 'Todas son correctas',
        correct: 'd',
    },

    {
        question: '3.- En Emment escribo ul>li*4>a+img. ¿Qué obtengo?',
        a: 'lista no ordenada, con 4 li, cada uno tiene 1 enlace y, después, 1 imagen',
        b: 'lista ordenada, con 4 li, cada uno tiene 1 enlace y, después, 1 imagen',
        c: 'lista ordenada, con 1 li que tiene 4 enlaces y, después, 1 imagen',
        d: 'lista no ordenada, con 4 li, cada uno tiene 1 enlace y, dentro, 1 imagen',
        correct: 'a',
    },

    {
        question: '4.- ¿Qué bucle imprime todos los enteros pares?',
        a: 'for ( ... ) { System.out.println(i); }',
        b: 'for ( ... ) { if ( i/2 == 0 ) { System.out.println(i); } }',
        c: 'for ( ... ) { if ( i%2 == 0 ) { System.out.println(i); } }',
        d: 'for ( ... ) { if ( i%2 != 0) { System.out.println(i); } }',
        correct: 'c',
    },

    {
        question: '5.- ¿Cuál NO es SQL Injection?',
        a: '" or ""="',
        b: 'OR 1=1',
        c: 'Batched SQL Statements',
        d: 'SQL Parameters',
        correct: 'd',
    },

    {
        question: '6.- ¿Cuál es la mejor estrategia de Layout en CSS?',
        a: 'Grid y Media Queries',
        b: 'Cualquiera menos Float',
        c: 'Combinar Flex y Grid, y Media Queries',
        d: 'Flex y Media Queries',
        correct: 'b',
    },

    {
        question: '7.- ¿Por qué usar Wordpress como desarrollador?',
        a: 'Permite crear soluciones en menos tiempo para determinados proyectos',
        b: 'Todas son correctas',
        c: 'Para ser el intermediario entre una empresa que necesita un CMS o tienda online y no tiene ni idea de tecnología',
        d: 'Hay una gran comunidad de desarrollo de ese CMS',
        correct: 'b',
    },

    {
        question: '8.- "Acabo de finalizar DAW y DAM, ya soy un Full Stack Developer"',
        a: 'Todas son correctas',
        b: '"Ni idea de frameworks, Scrum y Git"',
        c: 'Los Senior y los de RRHH te miran estupefactos',
        d: 'JAJAJAJAJAJAJAJAJAJA',
        correct: 'a',
    },

    {
        question: '9.- ¿Cuál es la menos redundante?',
        a: 'if ( checkInputs() ) { alert("Error!"); } else if ( checkInputs() != true ) { alert("Es correcto"); } else { alert("Es correcto"); }',
        b: 'if ( checkInputs() == true ) { alert("Error!"); } else { alert("Es correcto"); }',
        c: 'if ( checkInputs() != false ) { alert("Error!"); } else { alert("Es correcto"); }',
        d: 'if ( checkInputs() ) { alert("Error!"); } else { alert("Es correcto"); }',
        correct: 'd',
    },

    {
        question: '10.- La jornada laboral va a finalizar y debes guardar los cambios en el repo:',
        a: 'Archivo, guardar como...',
        b: 'Copiar en USB',
        c: 'git add ., git commit -m nombre_commit, git push -u origin nombre_rama',
        d: 'Si instalas una extensión de autoguardado en tu entorno de desarrollo, esto no es necesario',
        correct: 'c',
    },
];

// almacenar en constantes los elementos que tendrán el texto de pregunta y respuestas
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// almacenar en constante el botón contestar
const submitBtn = document.getElementById("submit");
// almacenar en varible index objeto
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
        no seleecionada
            alert
*/
submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    console.log(answer); // comprobar por consola que coge el valor

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

/* LLUVIA ICONOS */

// definir función
function createIcon() {
    // constant box -> crear elemento img
    const box = document.createElement("img");
    // hacer img tenga src="prize.svg"; fuente https://www.flaticon.com/free-icon/trophy_3112946
    box.setAttribute("src", "trophy.svg");

    // (para elemento img) tener atributo left= ; con valor 0-100vh
    box.style.left = Math.random() * 100 + "vw";

    // (para elemento img) atributo animationDuration con valor 3-4s
    box.style.animationDuration = Math.random() * 2 + 3 + "s";

    // hacer img dentro de body
    document.body.appendChild(box);

    // establecer tiempo para que desaparezca cada img
    setTimeout(() => {
        box.remove();
    }, 5000);
}