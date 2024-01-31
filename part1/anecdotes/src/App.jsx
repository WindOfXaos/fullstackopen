import { useState, useEffect } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
)

const Anecdote = ({ text, votes }) => (
  <div>
    <div>{text}</div>
    <div> has {votes} votes </div>
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0)

  const setRandomValue = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  useEffect(() => setHighest(votes.indexOf(Math.max(...votes))), [votes])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={setRandomValue} text='next anecdote' />

      {
        // only render this part when sum of votes is not zero
        votes.reduce((a, b) => a + b) != 0 ?
          <>
            <h1>Anecdote with most votes</h1>
            <Anecdote text={anecdotes[highest]} votes={votes[highest]} />
          </>
          : ""
      }
    </div>
  )
}

export default App