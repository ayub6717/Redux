import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ModalComponent from './components/ModalComponent';
import Posts from './sections/Posts';

const App = () => {
  return (
    <Provider store={store}>
      <ModalComponent />
      <Posts />
    </Provider>
  );
};

export default App;
