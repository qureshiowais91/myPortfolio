import './App.css';
import { Navigation } from './components/UI/Nav/Navigation';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet />
    </div>
  );
}

export default App;
