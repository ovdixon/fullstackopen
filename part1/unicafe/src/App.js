import React, { useState } from 'react'

const Statistic = (props) => {
  if (props.text === "Positive"){
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  ) 
}

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.label}</button>
  )
}

const App = () => {

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, all: 0
  })

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good +1,
      all: clicks.all + 1
    }
    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral +1,
      all: clicks.all + 1
    }
    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad +1,
      all: clicks.all + 1
    }
    setClicks(newClicks)
  }

  if (clicks.all === 0){
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button action={handleGoodClick} label="Good" />
        <Button action={handleNeutralClick} label="Neutral" />
        <Button action={handleBadClick} label="Bad" />
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button action={handleGoodClick} label="Good" />
      <Button action={handleNeutralClick} label="Neutral" />
      <Button action={handleBadClick} label="Bad" />
      <h1>Statistics</h1>

      <table> 
        <tbody>
          <Statistic text="Good" value={clicks.good} />
          <Statistic text="Neutral" value={clicks.neutral} />
          <Statistic text="Bad" value={clicks.bad} />
          <Statistic text="All" value={clicks.all} />
          <Statistic text="Average" value={(clicks.good - clicks.bad) / clicks.all} />
          <Statistic text="Positive" value={(clicks.good / clicks.all) * 100} />
        </tbody>
      </table>

    </div>
  )

}

export default App