import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ModalComponent from './components/ModalComponent';
// import Posts from './sections/Posts';
import PostsTwo from './sections/PostsTwo';

const App = () => {
  return (
    <Provider store={store}>
      <ModalComponent />
      {/* <Posts /> */}
      <PostsTwo />
    </Provider>
  );
};

export default App;
