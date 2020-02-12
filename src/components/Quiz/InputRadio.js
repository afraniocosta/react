import React from 'react'
import PropTypes from 'prop-types';

function InputRadio (props) {

  return (
    <>
      <input type='radio' name={props.name} value={props.value}/>
    </>
  )
}

InputRadio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default InputRadio
