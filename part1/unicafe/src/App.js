import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const sum = good - bad;
  const avg = (sum / all).toFixed(1) || 0;
  const positive = ((good / all) * 100).toFixed(1);

  const content =
    all > 0 ? 
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={positive + " %"} />
        </tbody>
      </table>
     : 
      <p> No feeadback given</p>
    ;

  return(
    <div>{content}</div>
  )
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodCounterHandler = () => {
    setGood(good + 1);
  };

  const neutralCounterHandler = () => {
    setNeutral(neutral + 1);
  };

  const badCounterHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback </h2>
      <Button handleClick={goodCounterHandler} text="good" />
      <Button handleClick={neutralCounterHandler} text="neutral" />
      <Button handleClick={badCounterHandler} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
