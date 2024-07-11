import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Success } from '../pages/Home/Success';

export const SerasaRoutes = () => (
  <Routes>
    <Route path="/" Component={Home} />
    <Route path="/sucesso" Component={Success} />
  </Routes>
);
