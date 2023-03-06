import AppDashboard from "./components/dashboard/AppDashboard";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import CartContextProvider from "./pages/Cart/CartContextProvider";

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <CartContextProvider>
                <AppDashboard />
            </CartContextProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
