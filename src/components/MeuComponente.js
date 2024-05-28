// Importa a biblioteca do react
import React from 'react';

// Cria o Componente
function MeuComponente(props) {
  return <div>Olá, {props.nome}!</div>;
}

// Exporta o componente para ser usado em qualquer lugar da aplicação
export default MeuComponente;