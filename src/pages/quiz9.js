import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/quiz.css';
import img9 from '../images/level9.webp';

const Quiz9 = () => {
  const [answer, setanswer] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (answer.toLowerCase() === 'plant') {
      navigate('/quiz10');
    } else {
      alert('Wrong answer');
    }
  }

  return (
    <div class="container">
      <h1 class="heading-primary">
        Quiz-<span>9</span>
      </h1>
      <div class="box">
        <div class="center">
          <img
            src={img9}
            alt="loading..."
            title="Click me.. no clue is there in the source code"
            height="400px"
            width="auto"
          />
        </div>
        <div class="center">
          <p>Think about it !</p>
        </div>

        {/* <div className="q">What is my name?</div> */}
        <div class="submit-section">
          <div class="center">
            <input
              type="text"
              id="answer"
              name="answer"
              placeholder="Enter your Answer"
              value={answer}
              onChange={(e) => setanswer(e.target.value)}
            />
            <button
              class="btn"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz9;
