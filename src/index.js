import React from "react";
import { AppRegistry } from "react-native";
import App from "./components/App";

// wrap app in providers
const Application = () => <App />;

AppRegistry.registerComponent("App", () => Application);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.querySelector("#root"),
});
