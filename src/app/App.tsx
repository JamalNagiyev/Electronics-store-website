import { BrowserRouter } from 'react-router';
import AppRouter from './router';
import './styles/App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App