import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css';
import SearchH from './SearchH';


const queryClient = new QueryClient();

function App() {
  return (
    <>
<SearchH/>
<QueryClientProvider client={queryClient}>
<Outlet/>
</QueryClientProvider>
    </>
  );
}

export default App;
