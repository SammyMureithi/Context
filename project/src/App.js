import React from "react"
import HeaderComponent from "./Components/HeaderComponent"

import { UserContextConsumer } from "./UsernameContextProvider"

class App extends React.Component {
    state = {
        newUsername: ""
    }
    
    handleChange=(e)=>{
          const{name,value}=e.target
          this.setState({[name]: value})
    }
    
    render() {    
        return (
            <div>
                <HeaderComponent />
                <main>
                    <UserContextConsumer>
                        {username => (
                          <div>
                            <p className="main">No new notifications, {username.username}! ✈️</p>
                            <input
                            type="text"
                            name="newUsername"
                            placeholder="New username"
                            value={this.state.newUsername}
                            onChange={this.handleChange}
                        />
                        <button onClick={()=>username.toggle(this.state.newUsername)}>Change Username</button>
                            </div>
                        )}
                    </UserContextConsumer>
                </main>
                
               
                
                
            </div>
        )
    }
}

export default App