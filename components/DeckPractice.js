import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import CardQuiz from './CardQuiz';
import Card from './Card'
import {Pages} from 'react-native-pages';
import {initActiveDeck} from '../actions';
import {Button} from 'react-native-elements';

class AddQuestion extends React.Component {

  componentWillMount() {
    const cards = this.props.deckCards;
    const deck = this.props.deck;
    this.props.dispatch(initActiveDeck(cards, deck));
    //create the scores entry
  }

  handleSubmit() {
    this.props.navigation.navigate('QuizResults');
  }

  render() {
    const deck = this.props.deck;
    const cards = this.props.deckCards;
    const isQuizMode = this.props.isQuizMode;
    return (
      <View style={{ flex: 1 }}>

        <Pages indicatorPosition='top' containerStyle={{ flex: 1, justifyContent: 'center' }}>
          {Object.keys(cards).map(cid => {
            if (isQuizMode) {
              return (
                <CardQuiz key={cid} card={cards[cid]} deck={deck}/>
              );
            }
            return (
              <Card key={cid} card={cards[cid]} deck={deck}/>
            );

          })}
        </Pages>
        <View style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
          <Button
            raised
            borderRadius={3}
            backgroundColor={'#2296F3'}
            title={'SUBMIT'}
            onPress={() => this.handleSubmit()}/>
        </View>
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

export default connect(mapStateToProps)(AddQuestion);