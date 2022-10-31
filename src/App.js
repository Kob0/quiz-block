import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correctAnswers }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
      <h2>
        Вы отгадали {correctAnswers} ответа(ов) из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ quizStep, currentQuestion, onClickAnswer }) {
  const progressBarPercentage = Math.round((quizStep / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progressBarPercentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{currentQuestion.title}</h1>
      <ul>
        {currentQuestion.variants.map((text, index) => (
          <li onClick={() => onClickAnswer(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [quizStep, setQuizStep] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
  const currentQuestion = questions[quizStep];

  const onClickAnswer = (index) => {
    setQuizStep(quizStep + 1);
    if (index === currentQuestion.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  return (
    <div className="App">
      {quizStep !== questions.length ? (
        <Game quizStep={quizStep} currentQuestion={currentQuestion} onClickAnswer={onClickAnswer} />
      ) : (
        <Result correctAnswers={correctAnswers} />
      )}
    </div>
  );
}

export default App;
