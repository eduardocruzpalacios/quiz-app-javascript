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