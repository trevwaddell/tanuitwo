import React, { Suspense } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import * as RouteComponents from "./Routes";

export default function App() {
  return (
    <Router>
      <Suspense fallback={<ActivityIndicator size="large" />}>
        <View style={styles.container}>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={RouteComponents.HomePage} />
            </Route>
            <Route path={"/login"} element={RouteComponents.LoginPage} />
          </Routes>
        </View>
      </Suspense>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
