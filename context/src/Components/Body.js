import React, { Component } from 'react'
import UserContext from '../UserContext'


export class Body extends Component {
  render() {
    const username=this.context
    return (
      <div>
        <p>Happy hour {username} ,we are enjoying our coding lessons with you {username} ❤️</p>
      </div>
    )
  }
}

Body.contextType=UserContext
export default Body