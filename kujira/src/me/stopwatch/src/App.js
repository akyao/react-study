import React, { Component } from 'react'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {started: false, time: 0}
  }

  buttonTitle () {
    return this.state.started ? 'STOP' : 'START'
  }
  countUp () {
    this.setState({time: this.state.time + 1})
  }
  render () {
    const setStateHandler = (e) => {
      let started = !this.state.started
      this.setState({started: started})
      if (started) {
        var intervalId = setInterval(e => {this.countUp()}, 1000)
        this.setState({intervalId: intervalId});
      } else {
        clearInterval(this.state.intervalId)
      }
    }
    return (
      <div>
        <div>{this.state.time}</div>
        <button onClick={setStateHandler}>
        {this.buttonTitle()}</button>
      </div>
    )
  }
}

export default App
