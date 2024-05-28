// Importa o recat e o componente 
import React from 'react';
import MeuComponente from './components/MeuComponente';

// Usa o componente importado em outro componente (App) e passa "mundo" como propriedade
function App() {
  return (
    <div>
      <h1>Meu Primeiro App React</h1>
      <MeuComponente nome="Mundo" />
    </div>
  );
}

//Exporta o componente App
export default App;
