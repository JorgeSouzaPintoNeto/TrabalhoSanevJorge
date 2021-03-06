import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Listagem from "./listagem";
import Login from "./login";
import Sair from "./sair";
import Cadastrar from "./cadastrar";

const Router = () => {
  return (
    <BrowserRouter>
    <div style={{backgroundColor:"white"}}  >
    <Switch>
        <Route path="/sair">
          <Sair />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastrar">
          <Cadastrar />
        </Route>
        <Route path="/">
          <Listagem />
        </Route>
      </Switch>

    </div>
      
    </BrowserRouter>
  )
}
export default Router;