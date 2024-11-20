// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, isTimerSeconds: 0}

  startTimerFunction = () => {
    this.timeInterval = setInterval(this.updatedTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  stopTimerFunction = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  resetTimerFunction = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, isTimerSeconds: 0})
  }

  updatedTimer = () => {
    this.setState(prevState => ({isTimerSeconds: prevState.isTimerSeconds + 1}))
  }

  renderSeconds = () => {
    const {isTimerSeconds} = this.state
    const seconds = Math.floor(isTimerSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMiniuts = () => {
    const {isTimerSeconds} = this.state
    const miniuts = Math.floor(isTimerSeconds / 60)

    if (miniuts < 10) {
      return `0${miniuts}`
    }
    return miniuts
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMiniuts()}:${this.renderSeconds()}`
    return (
      <div className="bg-card-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-card-container">
          <div className="head-timer-card">
            <img
              className="image"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <h1 className="timer-title">Timer</h1>
          </div>
          <h1>{time}</h1>
          <div>
            <button
              className="button-1"
              onClick={this.startTimerFunction}
              type="button"
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="button-2"
              onClick={this.stopTimerFunction}
              type="button"
            >
              Stop
            </button>
            <button
              className="button-3"
              onClick={this.resetTimerFunction}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
