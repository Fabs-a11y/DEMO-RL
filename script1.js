const questions = [ 

    { 

      question: "En cual rango de edad te encuentras?", 

      answers: [ 

        {text: "6-9", correct: true}, 

        {text: "10-12", correct: true}, 

        {text: "13-17", correct: true}, 

        {text: "18+", correct: true}, 

      ] 

    }, 

    { 

      question: "Selecciona el tema que mas te interesa de los siguientes:", 

      answers: [ 

        {text: "Accion", correct: true}, 

        {text: "Terror", correct: true}, 

        {text: "Romance", correct: true}, 

        {text: "Fantasia", correct: true}, 

      ] 

    }, 

    { 

      question: "Selecciona otro tema que sea de tu interes de las siguientes opciones:", 

      answers: [ 

        {text: "Misterio", correct: true}, 

        {text: "Suspenso", correct: true}, 

        {text: "Ciencia Ficcion", correct: true}, 

        {text: "Drama", correct: true}, 

      ] 

    }, 

    { 

      question: "Final de la historia:", 

      answers: [ 

        {text: "Finales felices", correct: true}, 

        {text: "Giros inesperados y sorprendentes", correct: true}, 

        {text: "Final abierto a interpretación", correct: true}, 

        {text: "Tragedias y dilemas morales", correct: true}, 

      ] 

    }, 

    { 

        question: "¿Tienes alguna preferencia sobre el idioma de los libros?", 

        answers: [ 

          {text: "Prefiero leer en español", correct: true}, 

          {text: "No tengo preferencia, leo en varios idiomas", correct: true}, 

          {text: "Me gusta leer en inglés", correct: true}, 

          {text: "Me interesa explorar libros traducidos de otras culturas", correct: true}, 

        ] 

      }, 

  ]; 

   

const questionElement = document.getElementById("question"); 

const answerButtons = document.getElementById("answer-buttons"); 

const nextButton = document.getElementById("next-btn"); 

const rcmButton = document.getElementById("rcm-btn")

 

let currentQuestionIndex = 0; 
let userAnswers = [];

 

function startQuiz(){ 

  currentQuestionIndex = 0; 

  userAnswers = [];

  nextButton.innerHTML = "Next"; 

  showQuestion(); 

} 

 

function showQuestion(){ 

  resetState(); 

  let currentQuestion = questions[currentQuestionIndex]; 

  let questionNo = currentQuestionIndex + 1; 

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 

   

  currentQuestion.answers.forEach(answer => { 

    const button = document.createElement("button"); 

    button.innerHTML = answer.text; 

    button.classList.add("btn"); 

    answerButtons.appendChild(button); 

    button.addEventListener("click", selectAnswer); 

  }); 

} 

 

function resetState(){ 

  nextButton.style.display = "none"; 
  rcmButton.style.display = "none"

  while(answerButtons.firstChild){ 

    answerButtons.removeChild(answerButtons.firstChild); 

  } 

} 

function selectAnswer(e){ 

    const selectedBtn = e.target; 

    selectedBtn.classList.add("selected"); 

    Array.from(answerButtons.children).forEach(button => { 

      if(button !== selectedBtn){ 

        button.disabled = true; 

      } 

    }); 

    userAnswers[currentQuestionIndex] = selectedBtn.innerHTML;
    nextButton.style.display = "block"; 
    rcmButton.style.display = "none"


  } 

  function saveAnswersAndRedirect() {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers)); 
    window.location.href = 'rcm.html';
  }

function handleNextButton(){ 

  currentQuestionIndex++; 

  if(currentQuestionIndex < questions.length){ 

    showQuestion(); 

  }else{ 

    questionElement.innerHTML = "Quiz completado!"; 

    resetState(); 

    nextButton.style.display = "none"; 
    rcmButton.style.display = "block"

  } 

} 

 

nextButton.addEventListener("click", ()=>{ 

  if(currentQuestionIndex < questions.length){ 

    handleNextButton(); 

  }else{ 

    startQuiz(); 

  } 

}); 

 

startQuiz(); 
