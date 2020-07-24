import React from "react";
import HomeStack from "./routes/HomeStack";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <HomeStack />
    </Provider>
  );
}
