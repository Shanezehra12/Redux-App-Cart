import React from 'react';
import {Provider} from 'react-redux';
import {mystore} from './src/redux/store/Store';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
    <Provider store={mystore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
