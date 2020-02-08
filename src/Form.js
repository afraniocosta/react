import React, { useState, useEffect } from 'react'

function Form(){

    const [value, setValue] = useState('nome');

    function handleChange(evt) {
        setValue(evt.target.value)
    }

    return(
        <>
            <input type='text' onChange={handleChange} />
            <div><p>Nome: {value}</p> </div>
        </>
    )

}

export default Form