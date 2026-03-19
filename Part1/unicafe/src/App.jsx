import { useState } from 'react'

const StatisticsLine = (props) => {
  return(
    <h3>{props.text} {props.value}</h3>
  )
}

const Statistics = (props) => {
  if (props.all){
    return(
      <>
        <h1>statistics</h1>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="neutral" value={props.neutral} />
            <StatisticsLine text="bad" value={props.bad} />
            <StatisticsLine text="all" value={props.all} />
            <StatisticsLine text="average" value={props.average} />
            <StatisticsLine text="positive" value={props.positive + " %"} />
      </>
    )
  }
  else{
    return(
      <>
        <h1>statistics</h1>
          <h3>No feedback given</h3>
      </>
    )
  }
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad

  const average = (good - bad) / all

  const positive = (good / all) * 100

  return (
    <div>
        <h1>give feedback</h1>
          <Button onClick={() => setGood(good + 1)} text="good" />
          <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
          <Button onClick={() => setBad(bad + 1)} text="bad" />
        <Statistics good = {good} neutral = {neutral} bad ={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App