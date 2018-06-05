import React from 'react';
import { View} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {Pages} from 'react-native-pages';
import CardQuiz from './CardQuiz';
import Card from './Card';
import {initActiveDeck} from '../actions/activeDeck';
import * as colors from '../util/colors';
import {MainButton} from './ui';
import sharedStyles from './styles'

class DeckPractice extends React.Component {

  static navigationOptions = {
    title: 'Practice'
  };

  componentWillMount() {
    const cards = this.props.deckCards;
    const deck = this.props.deck;
    this.props.dispatch(initActiveDeck(cards, deck));
  }

  handleSubmit() {
    this.props.navigation.navigate('QuizResults');
  }

  render() {
    const deck = this.props.deck;
    const cards = this.props.deckCards;
    const isQuizMode = this.props.isQuizMode;
    return (
      <View style={sharedStyles.container}>
        <Text style={sharedStyles.h1}>{deck.name}</Text>
        <Pages
          indicatorPosition='top'
          indicatorColor={colors.primary}
          containerStyle={{ flex: 1 }}
        >
          {Object.keys(cards).map(cid => {
            if (isQuizMode) {
              return (<CardQuiz key={cid} card={cards[cid]} deck={deck}/>);
            }
            return (<Card key={cid} card={cards[cid]} deck={deck}/>);
          })}
        </Pages>
        <MainButton
          title={'SUBMIT'}
          onPress={() => this.handleSubmit()}
        />
      </View>
    );
  }
}


function mapStateToProps({ cards }, ownProps) {
  const deck = ownProps.navigation.getParam('deck');
  const isQuizMode = ownProps.navigation.getParam('isQuizMode');
  const deckCards = Object.keys(cards)
                          .filter(c => deck.cards.includes(c))
                          .map(c => cards[c]);
  return { deckCards, deck, isQuizMode };
}

export default connect(mapStateToProps)(DeckPractice);