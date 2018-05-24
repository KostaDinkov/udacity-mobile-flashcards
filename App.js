import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import DeckList from './components/DeckList';
import {importData} from './actions/index';
import {fetchAllData} from './api/data';
import {createStackNavigator} from 'react-navigation';
import DeckDetails from './components/DeckDetails';
import DeckPractice from './components/DeckPractice';
import AddQuestion from './components/AddQuestion';

const store = createStore(reducer);
store.dispatch(importData(fetchAllData()));

const RootStack = createStackNavigator({
  Home: {
    screen: DeckList
  },
  DeckDetails: {
    screen: DeckDetails
  },
  DeckPractice:{
    screen:DeckPractice
  },
  AddQuestion:{
    screen:AddQuestion
  }

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


