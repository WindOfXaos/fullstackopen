import { useState } from 'react'

const Statistics = ({ statistics }) =>
  statistics.total == 0 ?
    (<div>No feedback given</div>) :
    (
      <table>
        <tbody>
          {Object.entries(statistics).map(([key, value]) =>
            <StatisticLine key={key} text={key} value={value} />
          )}
        </tbody>
      </table>
    )

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value + (text == "positive" ? " %" : "")}</td>
  </tr>
)

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  const [statistic, setStatistic] = useState({ total: 0, average: 0, positive: 0 })

  const setToValue = ({ good = feedback.good, neutral = feedback.neutral, bad = feedback.bad }) => () => {
    setFeedback({ good, neutral, bad })
    const total = good + neutral + bad
    setStatistic({
      total: total,
      average: (-bad + good) / total,
      positive: good / total * 100
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToValue({ good: feedback.good + 1 })} text="good" />
      <Button handleClick={setToValue({ neutral: feedback.neutral + 1 })} text="neutral" />
      <Button handleClick={setToValue({ bad: feedback.bad + 1 })} text="bad" />

      <h1>statistics</h1>
      <Statistics statistics={{ ...feedback, ...statistic }} />
    </div>
  )
}

export default App