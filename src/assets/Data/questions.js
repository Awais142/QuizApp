export const quiz = {
  topic: "javascript",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 4,
  questions: [
    {
      question:
        "1. Which function is used to serialize an object into a JSON string in JavaScript",
      choices: ["stringify()", "Parse", "Convert", "None of the above"],
      type: "MCQS",
      correctAnswer: "stringify()",
    },
    {
      question:
        "2. Which of the following keyword is used define a variable a JavaScript",
      choices: ["let", "var", "both a and b", "None of the above"],
      type: "MCQS",
      correctAnswer: "both a and b",
    },
    {
      question:
        "3. Which of the following methods can be used to display data in javascript",
      choices: [
        "document.write()",
        "Console.Log()",
        "Window.Alert()",
        "All of the above",
      ],
      type: "MCQS",
      correctAnswer: "All of the above",
    },
    {
      question:
        "4. How a data type to be declared as a constant type in Javascript",
      choices: ["const", "var", "let", "constant"],
      type: "MCQS",
      correctAnswer: "const",
    },
  ],
};
export default quiz;
