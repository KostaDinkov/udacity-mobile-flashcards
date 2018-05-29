import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import DeckList from './components/DeckList';
import {fetchAllData} from './api/data';
import {createStackNavigator} from 'react-navigation';
import DeckDetails from './components/DeckDetails';
import DeckPractice from './components/DeckPractice';
import AddQuestion from './components/AddQuestion';
import QuizResults from './components/QuizResults'

const store = createStore(reducer,fetchAllData());
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
  },
  QuizResults:{
    screen:QuizResults
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


