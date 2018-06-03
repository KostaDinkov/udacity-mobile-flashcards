import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import CardQuiz from './CardQuiz';
import Card from './Card';
import {Pages} from 'react-native-pages';
import {initActiveDeck} from '../actions';
import {Text} from 'react-native-elements';
import * as colors from '../util/colors';
import {MainButton} from './ui';

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
      <View style={styles.container}>
        <Text h4 style={styles.title}>{deck.name}</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.lightText,
    alignItems: 'stretch'
  },
  title: {
    textAlign: 'center',
    color: colors.darkPrimary
  },
  subtitle: {
    textAlign: 'center',
    color: colors.primary
  }

});

function mapStateToProps({ cards }, ownProps) {
  const deck = ownProps.navigation.getParam('deck');
  const isQuizMode = ownProps.navigation.getParam('isQuizMode');
  const deckCards = Object.keys(cards)
                          .filter(c => deck.cards.includes(c))
                          .map(c => cards[c]);
  return { deckCards, deck, isQuizMode };
}

export default connect(mapStateToProps)(DeckPractice);