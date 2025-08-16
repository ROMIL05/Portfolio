import { createBrowserRouter } from "react-router-dom";
// import { loginLoader, verifyLoader } from './loaders/verify.loader';
import ErrorElement from "./components/ErrorElement";
import Portfolio from "./pages/Portfolio";

const routes = createBrowserRouter([
  {
    path: "",
    children: [{ path: "/", element: <Portfolio /> }],
  },
  {
    path: "*",
    element: <ErrorElement />,
  },
]);
export default routes;
