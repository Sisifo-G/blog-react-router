
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Mi Blog Personal</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/acerca-de">Acerca de</Link>
          </nav>
        </header>
        <main>
          <Route path="/" exact={true}>
            <div>
              <h2>Página de Inicio</h2>
              <p>Esta es la página principal de nuestro sitio..</p>
            </div>
          </Route>
          <Route path="/blog">
            <div>
              <h2>Blog</h2>
              <ul>
                <li>Artículo 1</li>
                <li>Artículo 2</li>
                <li>Artículo 3</li>
              </ul>
            </div>
          </Route>
          <Route path="/acerca-de">
            <div>
              <h2>Acerca de</h2>
              <p>Esta es la página Acerca de nuestro sitio..</p>
            </div>
          </Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
