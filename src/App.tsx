import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './GlobalStyles';
import { SerasaRoutes } from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <SerasaRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
