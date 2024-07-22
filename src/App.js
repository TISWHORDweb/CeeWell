import './Styles/style.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Config/routes';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
