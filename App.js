import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import DeckList from './components/DeckList'
import {importData} from './actions/index';
import {fetchAllData } from './api/data'


const store = createStore(reducer);
store.dispatch(importData(fetchAllData()));

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>

          <Text>Mobile Flashcards App</Text>

          <DeckList/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
