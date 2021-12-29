import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

store.subscribe(() => {
  saveState({ ...persistedState, access_token: store.getState().auth.token });
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
