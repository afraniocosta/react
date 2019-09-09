import React from 'react'

class Tab extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
           rendaFixa: 'block',
           outrosInvestimentos: 'none'
        };
        this.OpenOtherInvestments = this.OpenOtherInvestments.bind(this);
        this.OpenRendaFixa = this.OpenRendaFixa.bind(this);
        console.log('estou no construtor')
    }

    componentDidMount() {
        console.log('estou no DidMount')      
    }

    OpenRendaFixa = (evt) => {

        console.log('mostra Renda Fixa')

        evt && evt.preventDefault()
        this.setState({
            outrosInvestimentos: 'none',
            rendaFixa: 'block'
        });

    }
    
    OpenOtherInvestments = (evt) => {

        console.log('mostra os novos investimentos')
        
        evt && evt.preventDefault()

        this.setState({
            outrosInvestimentos: 'block',
            rendaFixa: 'none'
        });

    }


    render () {
        
        return (

            <div>

                <button onClick={evt => { this.OpenRendaFixa(evt) }}>
                    Produtos de Renda Fixa
                </button>
                <button onClick={evt => { this.OpenOtherInvestments(evt) }}>
                    Outros tipos de Investimentos
                </button>

                <div id="rf" style={{display: this.state.rendaFixa}}>
                    CDB, LCI, LCA
                </div> 

                <div id="outros" style={{display: this.state.outrosInvestimentos}}>
                    Debêntures, Poupança
                </div>    
    
            </div>
        );
    }
}
        
export default Tab