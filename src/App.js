
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Route path="/" exact={true} component={Inicio} />
          <Route path="/blog" component={Blog} />
          <Route path="/acerca-de" component={AcercaDe} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
