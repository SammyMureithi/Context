import React, { Component } from 'react'
const {Provider,Consumer}=React.createContext()

class UsernameContextProvider extends Component {
    state={
        username: "Mure"
    }
    handleClick=(username)=>{
        this.setState({username})
    }
  render() {
    return (
      <div>
        <Provider value={{username: this.state.username,toggle: this.handleClick}}>
            {this.props.children}
        </Provider>
      </div>
    )
  }
}

export  {UsernameContextProvider,Consumer as UserContextConsumer}