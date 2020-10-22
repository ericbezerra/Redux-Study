import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";

import Video from "./components/Video";
import Sidebar from "./components/Sidebar";

const App = () => (
  <Provider store={store}>
    <Video />
    <Sidebar />
  </Provider>
);

export default App;
