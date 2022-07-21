import React from 'react'
import  { UserContextConsumer } from '../UsernameContextProvider'

function HeaderComponent() {
  return (
        <UserContextConsumer>
            {Context => (
                 <div className='header'>
                <h1>Welcome,{Context.username}</h1>
                </div>
            )}
                
        </UserContextConsumer>
       
           
  )
}

export default HeaderComponent