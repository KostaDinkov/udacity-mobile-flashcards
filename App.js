import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import DeckList from './components/DeckList';
import {importData} from './actions/index';
import {fetchAllData} from './api/data';
import {createStackNavigator} from 'react-navigation';
import DeckDetails from './components/DeckDetails'

const store = createStore(reducer);
store.dispatch(importData(fetchAllData()));

const RootStack = createStackNavigator({
  Home: {
    screen: DeckList
  },
  DeckDetails: {
    screen: DeckDetails
  },

},{
  initialrouteName: 'Home'
});

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
