import React, { Component } from 'react'

const {Provider,Consumer}=React.createContext()

class ThemeContextProvider extends Component {
    state={
        theme: "dark"
    }
    handleClick=()=>{
      
        this.setState(prevState => {
            return {
                theme : prevState.theme==="dark"?"light":"dark"
            }
        })
    }
  render() {
    return (
     <Provider value={{theme:this.state.theme,toggle:this.handleClick}}>
        {this.props.children}
     </Provider>
    )
  }
}


export  {ThemeContextProvider ,Consumer as ThemeContextConsumer}