import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './store';
import RootStack from './navigation';
import {clearLocalNotification, setLocalNotification} from './util/helpers';

export default class App extends React.Component {

  componentDidMount(){
    //TODO for production call just setLocalNotification
    //for debugging, a local notification will appear 1 min after the app starts
    clearLocalNotification().then(setLocalNotification);
  }

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


