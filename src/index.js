import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"
console.log(store)

// обор+ачиваем отрисовку компонента Provider,
// чтобы все компоненты имели доступ к глобальному стору

// В компонент провайдера нам необходимо передать сам стор

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
