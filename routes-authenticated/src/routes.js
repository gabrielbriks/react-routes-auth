import React from 'react';

/*
  Switch: Ele não deixa que seja chamado mais de uma rota ao mesmo tempos
    sendo assim, se houver mais de um solicitação para a mesma rota, ele 
    vai interferir, e carregar apenas uma.
  
  'exact' na Route: esse cara defini que deve ser obrigatoriamente aquela
  rota definida(nem mais nem menos). ele funciona como um tratamento 'if' 
*/
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { isAuthenticated } from './auth'

//padronizando o nome 'component' para 'Component'
const PrivateRoute = ({ component: Component, ...rest }) => (
  // Mesma routes que estamos chamando la em baixo
  <Route {...rest} render={props => (
    //renderizando o component com as novas props
    isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      /*caso ao contrario redirecionamos ele para outra rota que nao necessita Permission/Authentication
      O state abaixo, nao deixa que o usuario perca o estado/historico da pagina, possibilitando que o usuario
      consiga voltar ou avançar durante a navegação*/
      <Redirect to={{ pathname: '/', state: { from: props.location } }}/>      
    )
  )} />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* definindo a primeira rota com o path, e ele ira chamar algum componet; */}
      <Route exact path='/' component={() => <h1>Hello World Routes</h1>} ></Route>
      
      {/* Definindo como Privado a rota '/app'  */}
      <PrivateRoute  path='/app'component ={() => <h1>Você esta Autenticado</h1>}/>
      
    </Switch>
  </BrowserRouter>
);

export default Routes;