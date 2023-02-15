import AppDashboard from "./components/dashboard/AppDashboard";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppDashboard />
    </BrowserRouter>
  );
}

export default App;
