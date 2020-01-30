import React from 'react';

/*
  Switch: Ele não deixa que seja chamado mais de uma rota ao mesmo tempos
    sendo assim, se houver mais de um solicitação para a mesma rota, ele 
    vai interferir, e carregar apenas uma.
  
  'exact' na Route: esse cara defini que deve ser obrigatoriamente aquela
  rota definida(nem mais nem menos). ele funciona como um tratamento 'if' 
*/
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component }) => (
  <Route />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* definindo a primeira rota com o path, e ele ira chamar algum componet; */}
      <Route exact path='/' component={() => <h1>Hello World Routes</h1>} ></Route>
    </Switch>
  </BrowserRouter>
);