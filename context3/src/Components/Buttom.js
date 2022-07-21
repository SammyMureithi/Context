import React from 'react'
import { ThemeContextConsumer } from '../ThemeContextProvider'

function Buttom(props) {
    const myProps=props.theme
  return (
    
        <ThemeContextConsumer>
            {context => (
                <div className={context.theme+`-theme`}>
                <p>{context.theme==="dark"?"Dark":"Light"} Theme</p>
                </div>
            )}
        </ThemeContextConsumer>
       
  )
}

export default Buttom