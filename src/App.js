import { Outlet } from 'react-router-dom';
import './App.css';
import SearchH from './SearchH';

function App() {
  return (
    <>
<Outlet/>
<SearchH/>
    </>
  );
}

export default App;
