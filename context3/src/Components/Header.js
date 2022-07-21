import React from 'react'
import { ThemeContextConsumer } from '../ThemeContextProvider'

function Header() {
  return (
    
        <ThemeContextConsumer>
           
            {context => (
                 <div className={context.theme+`-theme`}>
                <h1>{context.theme==="dark"?"Dark":"Light"} Theme</h1>
                </div>
            )}
             
        </ThemeContextConsumer>
   
  )
}

export default Header