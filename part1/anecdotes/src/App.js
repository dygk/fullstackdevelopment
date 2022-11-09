import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const votesArray = new Array(7).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(votesArray);

  const selectAnectodeHandler = () => {
    setSelected(Math.floor(Math.random() * 7));
  };

  const setVotesHandler = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
  const maxVote = Math.max(...votes);
  const maxVoteIndex = votes.indexOf(Math.max(...votes));

  
  return (
    <div>
      <h2>Anectode of the day</h2>
      {anecdotes[selected]}
      <br />
      {"has " + votes[selected] + " votes"}
      <br />
      <button onClick={setVotesHandler}>vote</button>
      <button onClick={selectAnectodeHandler}>next anectode</button>

      <h2>Anectode with most votes</h2>
      {anecdotes[maxVoteIndex]}
      <br />
      {"has " + maxVote + " votes"}
    </div>
  );
}

export default App;
