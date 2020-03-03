import React from 'react';
import GreeterFunctional from './GreeterFunctional'
import PayeesManager from './payees/PayeesManager';

function App() {
  return (
    <div>
      <GreeterFunctional company="Discover" greeting="Salutations"/>
      <PayeesManager />
    </div>
  );
}

export default App;
