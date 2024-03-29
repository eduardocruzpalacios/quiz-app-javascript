// INITIAL SETUP

const nameEl = document.getElementById('name');

const startGame = document.getElementById('start-game');

startGame.addEventListener('click', () => {
  const nameValue = nameEl.value;
  if (nameValue !== '') {
    document.querySelector('.start').classList.toggle('hide');
    document.querySelector('.quiz-container').classList.toggle('show');
    LoadQuiz();
  } else {
    alert('Debes poner un nombre para comenzar el juego');
  }
});

// USER INITS QUIZ

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

function LoadQuiz() {
  DeselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

const answerEls = document.querySelectorAll('.answer');

function DeselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

let currentQuiz = 0;
let rightOnes = 0;
let wrongOnes = 0;

const answerQuestionButton = document.getElementById('submit');

answerQuestionButton.addEventListener('click', () => {
  const answer = GetSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      rightOnes++;
      alert(
        '¡RESPUESTA CORRECTA!\n\nCORRECTAS = ' +
          rightOnes +
          '\n\nERRÓNEAS = ' +
          wrongOnes
      );
    } else {
      wrongOnes++;
      alert(
        '¡RESPUESTA ERRÓNEA!\n\nCORRECTAS = ' +
          rightOnes +
          '\n\nERRÓNEAS = ' +
          wrongOnes
      );
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      LoadQuiz();
    } else {
      document.querySelector('.quiz-container').classList.toggle('show');
      document.querySelector('.summary').classList.toggle('show');
      setInterval(CreateIcon, 300);

      const nameValue = nameEl.value;
      document.getElementById('showName').innerHTML = nameValue;
      document.getElementById('showRight').innerHTML = rightOnes;
      document.getElementById('showWrong').innerHTML = wrongOnes;

      const points = rightOnes * 100 - wrongOnes * 50;
      document.getElementById('showPoints').innerHTML = points;
    }
  } else {
    alert('Debe seleccionar una opción');
  }
});

function GetSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}
