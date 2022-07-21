import React, { Component } from 'react'
import UserContext from '../UserContext'

export class Header extends Component {
  render() {
    const username=this.context
    return (
      <div id="header">
        <h1>Hello {username}, welcome back</h1>
      </div>
    )
  }
}
Header.contextType=UserContext
export default Header