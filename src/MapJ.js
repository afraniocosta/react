import React from 'react'
import data from './testemap.json'

//definindo style inline para o componente

class AppAlternativo extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            btnColor: 'red'
        }
        console.log('estou no construtor')
    }

    render () {
        console.log('estou no render')
        return (
           

            {data.map((item, index) => (
                <button
                
                >{item.names}</button>
                ))}
                
                console.log(data.names)
                )
    }
}

export default AppAlternativo