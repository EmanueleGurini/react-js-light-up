import { store } from './redux/store';
import { Provider } from 'react-redux';

import './App.css';
import Index from './pages/index'

function App() {

  return (
    <Provider store={store}>
      <Index />
    </Provider >
  );
}

export default App;
