import React from 'react';
import {View, BackHandler} from 'react-native';
import {Card, Text, Badge, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import { StackActions } from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons';
import * as colors from '../util/colors';
import {CardTitle, MainButton, ResultsTitle} from './ui';
import sharedStyles from './styles';

class QuizResults extends React.Component {

  getScore() {
    return ((this.correctCount / this.totalCount) * 100).toFixed(1);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz Results',
    headerLeft: <Icon name="home"
                      onPress={() => navigation.navigate('Home')}
                      size={26}
                      color={colors.lightText}
                      containerStyle={{ marginLeft: 20 }}

    />
  });

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('Home');
      return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => false);
  }

  handleBack() {
    const deck = this.props.activeDeck.deck;
    this.props.navigation.navigate('DeckDetails', { deck: deck.id });
  }

  handleStartOver() {
    const deck = this.props.activeDeck.deck;
    const isQuizMode = this.props.activeDeck.isQuizMode;
    const resetAction = StackActions.push({
      routeName:'DeckPractice',
      params:{deck,isQuizMode}
    });

    this.props.navigation.dispatch(resetAction);
  }

  isCorrect(ans) {
    this.totalCount++;
    for (let i of Object.keys(ans)) {
      if (ans[i].isChecked !== ans[i].shouldBeChecked) {
        return false;
      }
    }
    this.correctCount++;
    return true;
  }

  getBadgeColor() {
    const score = this.getScore();

    switch (true) {
      case (score > 80):
        return colors.accentColor;
      case(score > 50):
        return colors.primary;
      case(score > 20):
        return colors.darkPrimary;
      default:
        return colors.error;
    }
  }

  render() {
    this.correctCount = 0;
    this.totalCount = 0;
    debugger;
    const answers = this.props.activeDeck.answers;
    const deckName = this.props.activeDeck.deck.name;
    return (
      <View style={sharedStyles.container}>
        <Card
          title={<CardTitle info='Results for' title={deckName}/>}
          containerStyle={sharedStyles.card}
        >
          <View>
            {Object.keys(answers).map((k, i) => (
              <View key={k}>
                <Text style={sharedStyles.normalText}>
                  Question {i + 1}: {this.isCorrect(answers[k])
                  ? <Text style={{ color: colors.primary }}>Correct</Text>
                  : <Text style={{ color: colors.error }}>Incorrect</Text>}
                </Text>
              </View>
            ))}
          </View>
          <Text style={sharedStyles.subtitle}
          >Total Correct Answers: {this.correctCount} of {this.totalCount}
          </Text>
          <Badge containerStyle={{ marginVertical: 20, backgroundColor: this.getBadgeColor() }}>
            <Text h4 style={{ color: colors.lightText }}>Score: {this.getScore()}%</Text>
          </Badge>
          <MainButton title='Start Over' onPress={() => this.handleStartOver()}/>
          <MainButton title='Back to Deck' onPress={() => this.handleBack()}/>
        </Card>
      </View>
    );
  }
}

export default connect(({ activeDeck }) => ({ activeDeck }))(QuizResults);