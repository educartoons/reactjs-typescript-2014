import { useState } from 'react';
import styled from 'styled-components';
import { Question } from './Question';

import questions from '../json/questions.json';

const QuizStyled = styled.div`
  padding: 1rem 1rem;
  .btnWrapper {
    margin-top: 2em;
  }
  button {
    background-color: #313648;
    border: 0;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    padding: 1rem 0;
    width: 100%;
  }
`;

// Single Reponsability

function Quiz() {
  const [index, setIndex] = useState(0);

  const handleOnClick = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    }
  };

  return (
    <QuizStyled>
      <div>
        {index + 1}/{questions.length}
      </div>
      <Question question={questions[index]} />
      <div className="btnWrapper">
        <button onClick={handleOnClick}>Continue</button>
      </div>
    </QuizStyled>
  );
}

export { Quiz };
