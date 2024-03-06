import { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuestionStyled = styled.div`
  h2 {
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 0 1rem 0;
  }
  ul {
    li {
      input {
        display: none;
      }
      label {
        border: 2px solid gainsboro;
        border-radius: 2rem;
        cursor: pointer;
        display: block;
        font-weight: 400;
        margin-bottom: 1rem;
        padding: 1rem 1rem;
      }
      input:checked + label {
        background-color: gainsboro;
      }
    }
  }
`;

type QuestionProps = {
  question: {
    Question: string;
    Alternatives: string[];
    RightAlternative: string;
  };
};

function Question(props: QuestionProps) {
  const [indexChecked, setIndexChecked] = useState('');
  const { Question, Alternatives } = props.question;

  useEffect(() => {
    setIndexChecked('');
  }, [props.question]);

  return (
    <QuestionStyled>
      <h2>{Question}</h2>
      <ul>
        {Alternatives.map((alternative, index) => (
          <li key={index}>
            <input
              type="radio"
              id={String(index)}
              name={String(index)}
              value={String(index)}
              checked={indexChecked === String(index)}
              readOnly
            />
            <label
              onClick={() => setIndexChecked(String(index))}
              htmlFor={String(index)}
            >
              {alternative}
            </label>
          </li>
        ))}
      </ul>
    </QuestionStyled>
  );
}

export { Question };
