import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./containers/App";

import { createStore } from "redux";
import rootReducer from "./reducers";

const GlobalStyle = createGlobalStyle`
  body {
    background: grey;
  }
`;

// Criando a store com o nosso rootReducer
// Que é a soma de todos os reducers do projeto
const store = createStore(rootReducer);

// Abaixo temos o Provider que é o responsável
// por disponibilizar a store
// para todos os componentes abaixo dela
// ou seja, todos os filhos do componente App
// ao serem conectados (connect()) terão acesso à store
render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);