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

function getRandomQuestion(Arr1) {
  let randomQuestion = Math.floor(Math.random() * Arr1.length);
  console.log(Arr1[randomQuestion]);
  console.log(randomQuestion);
  return Arr1[randomQuestion];
};

function getRandomComputerChoice(Arr) {
    let randomChoiceIndex = Math.floor(Math.random() * Arr.length);
    let randomAnswerIndex = Math.floor(Math.random() * Arr.length);
    let computerChoiceIndex = Arr[randomChoiceIndex];
    let computerChoice = computerChoiceIndex.choices[randomAnswerIndex];
    console.log(computerChoice);
    return computerChoice;
  }

let Arr = questions;
let Arr1 = ["1 What is the chemical symbol for water?", 
"2 What is the top part of a fraction?",
"3 What book series did J.K.Rowling write?",
"4 What is the mist on the grass in the morning called?",
"5 What is the part of food keeps you healthy called?"
];

let questionsArr = getRandomQuestion(Arr1);
console.log(questionsArr);
let getComputerChoice = getRandomComputerChoice(Arr);
console.log(getComputerChoice);

