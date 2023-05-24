import React, { useState, useEffect } from 'react';
import './App.css';
import FingerPlacements from './tips.js'

const App = () => {
  const [timer, setTimer] = useState(300);
  const [isTypingEnabled, setIsTypingEnabled] = useState(false);
  const [inputText, setInputText] = useState('');
  const [highlightedKeys, setHighlightedKeys] = useState([]);
  const [keysPressed, setKeysPressed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [tips,setTips] = useState(false)

  const startTimer = () => {
    setIsTypingEnabled(true);
  };

  const stopTimer = () => {
    setIsTypingEnabled(false);
  };

  const resetTimer = () => {
    setTimer(300);
    setInputText('');
    setIsTypingEnabled(false);
    setHighlightedKeys([]);
    setKeysPressed(0);
    setAccuracy(0);
    setWordsPerMinute(0);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputText(value);
    setKeysPressed(value.length);
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (key === 'Enter') {
      stopTimer();
      calculateResults();
    } else {
      handleOtherKeyClick(key);
    }
  };

  const handleOtherKeyClick = (key) => {
    if (isTypingEnabled) {
      setHighlightedKeys((prevKeys) => {
        if (prevKeys.includes(key)) {
          return prevKeys.filter((k) => k !== key);
        } else {
          return [...prevKeys, key];
        }
      });
    }
  };
  

  const calculateResults = () => {
    const words = inputText.trim().split(' ');
    const correctWords = words.filter((word) => word === 'asdfjkl;');
    const calculatedAccuracy = ((correctWords.length / words.length) * 100).toFixed(2);
    const calculatedWordsPerMinute = (words.length / 5).toFixed(2);
  
    setAccuracy(calculatedAccuracy);
    setWordsPerMinute(calculatedWordsPerMinute);
  };
  

  useEffect(() => {
    let interval = null;
    if (isTypingEnabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      stopTimer();
      calculateResults();
    }
    return () => clearInterval(interval);
  }, [isTypingEnabled, timer]);

  return (
    <div className="app-container">
      <h2 className="timer">
          Timer: {Math.floor(timer / 60)}:
          {timer % 60 < 10 ? '0' + (timer % 60) : timer % 60}
        </h2>
      <h1>Lets Learn typing....</h1>
      <h3>With the baisc letters first</h3>
      
      <div className="typing-container">
        <div className="typing-box">
        {['a', 's', 'd', 'f', 'j', 'k', 'l', ';'].map((key) => (
            <span
              key={key}
              onClick={() => handleOtherKeyClick(key)}
              className={`typing-letter ${
                highlightedKeys.includes(key) ? 'highlighted' : ''
              } ${inputText.endsWith(key) ? 'pressed' : ''}`}
            >
              {key}
            </span>
          ))}

        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={!isTypingEnabled}
          className="input-field"
          placeholder='Start Typing'
        />
      </div>
      {timer === 0 && (
        <div className="results-container">
          <h3 className="results-heading">Results:</h3>
          <div className="result-item">
            <span className="result-label">Keys Pressed:</span>
            <span className="result-value">{keysPressed}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Accuracy:</span>
            <span className="result-value">{accuracy}%</span>
          </div>
          <div className="result-item">
            <span className="result-label">Words Per Minute:</span>
            <span className="result-value">{wordsPerMinute}</span>
          </div>
        </div>
      )}
      <div className="timer-container">
        <div className="button-container">
          <button
            className="action-button"
            onClick={startTimer}
            disabled={isTypingEnabled}
          >
            Start
          </button>
          <button
            className="action-button"
            onClick={stopTimer}
            disabled={!isTypingEnabled}
          >
            Stop
          </button>
          <button className="action-button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
      <button className='tips-button' onClick={(e)=>setTips(!tips)}>Tips </button>
      {tips && <FingerPlacements />}
    </div>
  );
};

export default App;
