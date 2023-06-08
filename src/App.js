import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ModalComponent from './components/ModalComponent';

const App = () => {
  return (
    <Provider store={store}>
      <ModalComponent />
    </Provider>
  );
};

export default App;
