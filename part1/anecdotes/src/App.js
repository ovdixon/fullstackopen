import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.label}</button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))


  const randomQuote = () => {
    const numberOfAnecdotes = anecdotes.length
    const randomNumber = Math.floor(Math.random() * (numberOfAnecdotes - 0) + 0);
    setSelected(randomNumber)
  }
  
  const voteQuote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button action={randomQuote} label="Next Anecdote"/>
      <Button action={voteQuote} label="Vote" />
      <h1>Anecdote with the most votes</h1>
      <Anecdote text={anecdotes[mostVoted]} votes={votes[mostVoted]} />
      
    </div>
  )
}

export default App