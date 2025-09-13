import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";
import Portfolio from "./pages/Portfolio";

const routes = createBrowserRouter(
  [
    {
      path: "",
      children: [{ path: "/", element: <Portfolio /> }],
    },
    {
      path: "*",
      element: <ErrorElement />,
    },
  ],
  {
    basename: "/",
  }
);
export default routes;
