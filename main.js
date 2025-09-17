let questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    category: "Math",
    question: "What is the top part of a fraction?",
    choices: ["Denominator", "Numerator", "Decimal"],
    answer: "Numerator"
  },
  {
    category: "Books",
    question: "What book series did J.K.Rowling write?",
    choices: ["The Expanse", "Star Trek", "Harry Potter"],
    answer: "Harry Potter"
  },
  {
    category: "Weather",
    question: "What is the mist on the grass in the morning called?",
    choices: ["Chlorophyl", "Slime", "Dew"],
    answer: "Dew"
  },
  {
    category: "Health",
    question: "What is the part of food keeps you healthy called?",
    choices: ["Nutrition", "Pesticides", "Horomones"],
    answer: "Nutrition"
  },
];

let randomQuestion;
let randomAnswer;
let computerAnswer;

function getRandomQuestion(array) {
  randomQuestion = Math.floor(Math.random()*array.length);
  console.log(randomQuestion);
  return array[randomQuestion];
  }
console.log(getRandomQuestion(questions).question);
 
function getRandomComputerChoice(answerArr) {
  randomAnswer = Math.floor(Math.random()*answerArr.length);
  computerAnswer = answerArr[randomAnswer];
  return answerArr[randomAnswer];
}
function getResults(quest, compAnswer) {
  if(quest.answer === compAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questions[randomQuestion].answer}`;
  }
}

console.log(getRandomComputerChoice(questions[randomQuestion].choices));
console.log(getResults(questions[randomQuestion], computerAnswer));