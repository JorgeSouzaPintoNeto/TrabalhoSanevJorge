import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Typography} from "@material-ui/core";
import './style.css';

const Header = () => {
  const [nome, setNome] = useState(null);

  useEffect(() => {
    const nomeUsuario = localStorage.getItem('nome');
    if (nomeUsuario) {
      setNome(nomeUsuario)
    } else {
      setNome(null)
    }
  }, [])

  return (
    <Container className="header">
      <Typography variant="h4">
        {nome ? `Bem vindo, Sr ${nome}` : 'Seja bem vindo a loja do Sr. Pinto'}
        <Link to={nome ? 'sair' : 'login'} style={{textDecoration: 'none'}}>
          <Button variant="contained"
          className="botaoSair login ml">
            {nome ? 'Sair' : 'Login'}
          </Button>
        </Link>
      {nome ? (
        <Link to="cadastrar" style={{textDecoration: 'none'}}>
          <Button variant="contained"
          className="botaoEditar ml">
           Cadastrar Novo Item
          </Button>
        </Link>
      ) : ' '}
      </Typography>
      
    </Container>
  )
}

export default Header;