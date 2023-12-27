// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}
  getRandomNum = () => {
    return Math.ceil(Math.random() * 100)
  }
  onIncrement = () => {
    const randomNumber = this.getRandomNum()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const evenOdd = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="con1">
          <h1 className="h1">Count {count}</h1>
          <p className="p1">Count is {evenOdd}</p>
          <button onClick={this.onIncrement} className="button">
            Increment
          </button>
          <p className="p2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
