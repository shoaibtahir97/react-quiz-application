import { useEffect, useState } from "react";

function App() {
  //   const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => setQuestions(res.results));
  }, []);
  return (
    <div>
      <h1>Quiz Application</h1>
      <p>
        This is a quiz on the topic of Entertainment . There are 10 multiple
        choice questions questions in this quiz. Passing criteria of the quiz is
        50%.
      </p>

      <button>Start Quiz</button>
    </div>
  );
}

export default App;
