import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './store';
import RootStack from './navigation';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack/>
        </PersistGate>
      </Provider>
    );
  }
}


