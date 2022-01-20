import React, { Suspense } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import * as RouteComponents from "./Routes";

// <Suspense fallback={<ActivityIndicator size="large" />}>

export default function App() {
  return (
    <Router>
      <View style={styles.container}>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route
              exact
              path="/"
              element={
                <Suspense fallback={<ActivityIndicator size="large" />}>
                  <RouteComponents.HomePage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={"/login"}
            element={
              <Suspense fallback={<ActivityIndicator size="large" />}>
                <RouteComponents.LoginPage />
              </Suspense>
            }
          />
        </Routes>
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
