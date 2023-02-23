import AppDashboard from "./components/dashboard/AppDashboard";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <AppDashboard />
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
