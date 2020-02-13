import React from 'react'

//definindo style inline para o componente

class AppAlternativo extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            btnColor: 'red'
        }
        console.log('estou no construtor')
    }

    componentDidMount() {
        // o didMount eh ideal para podermos calcular resize, por exemplo
        // calcular a largura e altura da window
        console.log('estou no componentDidMount')
    }

    // toda atualizacao de estado e/ou props, o didUpdate sera renderizado
    componentDidUpdate() {
        console.log('estou no componentDidUpdate: ', this.state.btnColor)
    }

    componentWillUnmount() {

    }

    changeColor = (evt) => {
        evt && evt.preventDefault()

        const btnColor = this.state.btnColor === 'red'
            ? 'blue'
            : 'red'

        console.log('fui clicado')
        this.setState({
            btnColor
        })
    }

    render () {
        console.log('estou no render')
        return (
            <a
                style={{color: this.state.btnColor}}
                href='qualquer/coisa'
                onClick={evt => { this.changeColor(evt) }}
            >
                Click here!
            </a>
        )
    }
}

export default AppAlternativo