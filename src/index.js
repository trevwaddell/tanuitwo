import "regenerator-runtime/runtime.js";

import React from "react";
import { AppRegistry } from "react-native";
import { IdentityContextProvider } from "react-netlify-identity";
import App from "./components/App";

// wrap app in providers
const Application = () => (
  <IdentityContextProvider url="http://kind-wright-3d6660.netlify.app">
    <App />
  </IdentityContextProvider>
);

AppRegistry.registerComponent("App", () => Application);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.querySelector("#root"),
});
