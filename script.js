/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
const questionEl = document.getElementById("question");
const reponseEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const msg = "merci d'avoir participé";
let index = 0;
let score = 0;
let timerEl = document.getElementById("timer");




//affiche les questions
function afficherQuestion() {
  const currentQuestion = questions[index];
  questionEl.textContent = currentQuestion.question;
//affiche les reponses
  reponseEl.innerHTML = "";
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const li = document.createElement("li");
    li.classList.add("answer");
    li.textContent = answer;
    reponseEl.appendChild(li);
  }

  resetTimer();
  startTimer();
}

function resetTimer() {
  clearInterval(timer);
  timerEl.textContent = "10";
}

function startTimer() {
  let count = 10;
  timer = setInterval(function() {
    count--;
    timerEl.textContent = count;
    if (count === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    afficherQuestion();
  } else {
    questionEl.innerHTML = msg;
    reponseEl.remove();
    timerEl.remove();
  }
}

reponseEl.addEventListener("click", function(event) {
  const selectedAnswer = event.target.textContent;
  const currentQuestion = questions[index];
  const correctAnswerIndex = currentQuestion.correctAnswerIndex;
  const isCorrectAnswer = currentQuestion.answers[correctAnswerIndex] === selectedAnswer;

  if (isCorrectAnswer) {
    score++;
    scoreEl.textContent = score;
  }

  clearInterval(timer);
  nextQuestion();
});

afficherQuestion();

