import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Button extends Component {
  render() {
    return (
      <div>
      
      <button className={this.props.theme+`-theme`} 
      onClick={this.props.toggle}>Switch Theme</button>
  
      </div>
    )
  }
}
Button.defaultProps={
    theme: "light"
}
Button.propType=PropTypes.oneOf(["light","dark"])

export default Button