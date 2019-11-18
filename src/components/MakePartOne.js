import React, { Component } from 'react'

export class MakePartOne extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} />
        <h1>{this.props.name}</h1>
      </li>
    )
  }
}

export default MakePartOne
