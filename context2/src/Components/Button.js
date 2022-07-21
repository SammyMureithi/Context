import React from 'react'
import PropTypes from 'prop-types';

function Button(props) {
    //incase we don't want every button to adhere to the dark and light them of the Theme Context
    //it would be a best practice to pass the Context consumer as a prop value
    const theme=props.theme
  return (
    <div>
        <button className={`${theme}-theme`}>Switch Themes</button>
    </div>
  )
}
Button.protoType={
    theme: PropTypes.oneOf(["light","dark"])
}
Button.defaultProps={
    theme: "dark"
}
export default Button