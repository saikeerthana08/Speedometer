// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreaks = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-title">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="title">Speed is {count}mph</h1>
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate button"
            onClick={this.onAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="break button"
            onClick={this.onBreaks}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
