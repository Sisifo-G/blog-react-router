
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%auto;
  max-width: 700px;
`;

const Main = styled.main`
  background: #FFF;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Route path="/" exact={true} component={Inicio} />
          <Route path="/blog" component={Blog} />
          <Route path="/acerca-de" component={AcercaDe} />
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

export default App;
