import React from 'react';
// import logo from './logo.svg';
import Usuarios from './components/usuarios'
import './App.css';

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Albuns</th>
          <th>Posts</th>
          <th>Photos</th>
        </tr>
        </thead>
        <tbody>
        <Usuarios/>
        </tbody>
      </table>
  );
}

export default App;
