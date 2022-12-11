import { useEffect, useState } from "react";
// import Quiz from "./Quiz";
function App() {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => setQuestions(res.results));
  }, []);

  const updateQuestions = (selectedOption) => {
    if (selectedOption == questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (questions.length === 0) {
    return "Loading...";
  }
  console.log("Questions==>>", questions);

  return (
    <div>
      {showScore ? (
        <span>
          Your scored {score} out of {questions.length}
        </span>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].question}
            </div>
          </div>

          <div className='answer-section'>
            {questions[currentQuestion].incorrect_answers.map((value) => {
              return (
                <div>
                  <button onClick={() => updateQuestions(value)}>
                    {value}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
