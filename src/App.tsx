import { BrowserRouter } from 'react-router-dom';
import AppProvider from './providers';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
