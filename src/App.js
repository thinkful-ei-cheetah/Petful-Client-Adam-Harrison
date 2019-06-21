import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Instruction from './Instruction';
import Adoption from './Adoption';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Instruction}/>
        <Route exact path='/adopt' component={Adoption}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
