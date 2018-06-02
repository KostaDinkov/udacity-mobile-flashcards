import QuizResults from '../components/QuizResults';
import {createStackNavigator} from 'react-navigation';
import AddQuestion from '../components/AddNewCard';
import DeckPractice from '../components/DeckPractice';
import DeckDetails from '../components/DeckDetails';
import DeckList from '../components/DeckList';
import CreateNewDeck from '../components/CreateNewDeck';
import * as colors from '../util/colors'

export default  RootStack = createStackNavigator({
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
  },
  CreateNewDeck:{
    screen:CreateNewDeck
  }

},{
  initialrouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color:colors.lightText
    },
  },
}
);