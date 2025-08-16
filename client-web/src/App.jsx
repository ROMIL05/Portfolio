import { RouterProvider } from "react-router-dom";
import StandardErrorBoundary from "./components/StandardErrorBoundary";
import routes from "./routes";

function AppContent() {
  return <RouterProvider router={routes} />;
}

function App() {
  return (
    <StandardErrorBoundary>
      <AppContent />
    </StandardErrorBoundary>
  );
}

export default App;
