import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Index from './pages/index'
import PageNotFound from './pages/404';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </Provider >
  );
}

export default App;
