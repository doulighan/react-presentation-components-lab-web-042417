import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy'
    }
  }

  handleClick(e) {
    if (this.state.mood === 'happy') {
      var mood = 'sad'
    } else {
      var mood = 'happy'
    }
    this.setState({
      mood: mood
    })
  }

  render () {
    return (
      <div className='simple-component' onClick={this.handleClick.bind(this)}>
        <h3>{this.state.mood}</h3>
      </div>  
    )
  }
}

export default SimpleComponent