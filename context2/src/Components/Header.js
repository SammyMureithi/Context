import React from 'react'
import ThemeContext from '../ThemeContext'

function Header() {
  return (
    <ThemeContext.Consumer>
        {theme => (
            <div>
                <h1 className={`${theme}-theme`}>{theme=="light"? "Light":"Dark"} Theme</h1>
            </div>
        )}
    </ThemeContext.Consumer>
    
  )
}

export default Header