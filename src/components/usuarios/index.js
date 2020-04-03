import React, { Component } from 'react';
import axios from 'axios';
import Itens from '../itens'

class Usuarios extends Component {
    state = {
        usuarios: []
    }
    
    
    componentDidMount = () => { 
        axios.get("https://jsonplaceholder.typicode.com/users") 
            .then(result => { 
                this.setState({ usuarios: result.data 
            }); 
        }); 
    } 
        
        render() {
            return(
                <>
                {this.state.usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.name}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.phone}</td>
                        <Itens idUsuario={usuario.id} tipo="albums"/>
                        <Itens idUsuario={usuario.id} tipo="posts"/>
                        <Itens idUsuario={usuario.id} tipo="photos"/>
                    </tr> 
                ))}
                </>
                //por ser js é preciso separar do jsx 
            )
            }
            
        } 
        
        export default Usuarios;