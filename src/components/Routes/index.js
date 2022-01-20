import { lazy } from "react";

export const LoginPage = lazy(() =>
  import(/* webpackChunkName: 'LoginPage' */ "../LoginPage")
);

export const HomePage = lazy(() =>
  import(/* webpackChunkName: 'HomePage' */ "../HomePage")
);
