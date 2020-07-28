import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import CadastroVideo from './components/pages/cadastro/Video'
import CadastroCategoria from './components/pages/cadastro/Categoria/index';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} exact />
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
        <Route component={() => (<div>Página 404</div>)} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

