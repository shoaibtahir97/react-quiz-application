import { useState } from "react";

function Quiz({ list }) {
  const [array, setArray] = useState(list);
  let [value, setValue] = useState("");
  let [initial, setInitial] = useState(0);
  let [valueOptions, setValueOptions] = useState("");
  console.log(array);

  let questions = array.map((value) => {
    return value.question;
  });

  let options = array.map((value) => {
    return value.incorrect_answers;
    return;
  });

  let options1 = array.map((value) => {
    return value.correct_answer;
  });

  for (let i = 0; i < options.length; i++) {
    options[i].push(options1[i]);
  }

  // console.log("updated options ===>", options);

  // for (let i = 0; i < array.length; i++) {
  //   console.log("options ===>", array[i].incorrect_answers);
  // }

  const showQues = () => {
    if (initial < questions.length) {
      value = questions[initial++] + "<br/>";

      // options[initial++]
    }
    document.getElementById("text").innerHTML = value;
  };

  if (array.length === 0) {
    return "Data not able to fetch. Kindly Refresh the Page";
  }
  return (
    <div>
      <p id='text'></p>
      <p>{valueOptions}</p>
      {/* {array.map((value, item) => {
        return (

          <div key={item}>
          {value.question}
           
        </div>
        );
      })} */}

      <button id='btn' onClick={showQues}>
        Next{" "}
      </button>
    </div>
  );
}

export default Quiz;
