import React, { Component } from 'react';
import axios from 'axios';

class Itens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itens: [],
            idUsuario: props.idUsuario,
            tipo: props.tipo
        }
    }

    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.idUsuario}/${this.state.tipo}`) 
        .then(result => { 
            this.setState({ itens: result.data 
        }); 
    }); 
    }

    render() {
        return(
            <td>{this.state.itens.length}</td>
        )
    }

}

export default Itens;