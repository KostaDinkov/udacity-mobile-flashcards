import React from 'react';
import {connect} from 'react-redux';
import {View, Easing} from 'react-native';
import FlipView from './FlipView';
import {Text, Divider} from 'react-native-elements';
import * as colors from '../util/colors';
import {setAnswerToCorrect} from '../actions/activeDeck';
import {CardFooter, OvalButton} from './ui';
import sharedStyles from './styles'

class Card extends React.Component {
  state = {
    isFlipped: false,
    answer: 'not answered'
  };

  setAnswer(result) {
    const cardId = this.props.card.id;
    this.setState({ answer: result });
    //update the answer to be correct in the active deck
    if (result === 'correct') {
      this.props.dispatch(setAnswerToCorrect(cardId));
    }
  }

  flipCard() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  cardFront(card) {
    return (
      <View style={sharedStyles.cardContainer}>
        <View style={{flex:1}}>
          <Text style={sharedStyles.questionText}>{card.question}</Text>
        </View>
        <OvalButton
          title='Show Answer'
          onPress={() => this.flipCard()}
        />
        <CardFooter pages={this.props.pages} index={this.props.index}/>
      </View>
    );
  }

  cardBack(card) {
    return (
      <View style={sharedStyles.cardContainer}>
        <View style={{flex:1}}>
          <Text style={sharedStyles.questionText}>{card.question}</Text>
          <Divider style={sharedStyles.divider}/>
          <Text style={sharedStyles.subtitle}>Correct answers:</Text>
          {card.options.map((o, i) => {
            if (o.answer) {
              return (
                <View key={i}>
                  <Text  style={sharedStyles.normalText}> {o.text}</Text>
                </View>
              );
            }
          })}
        </View>

        <View >
          <Text style={sharedStyles.normalText }>Was your guess correct or incorrect?</Text>
          <View style={{ flexDirection: 'row' }}>
            <OvalButton
              onPress={() => this.setAnswer('correct')}
              containerStyle={{ flex: 1 }}
              title={'Correct'}
              backgroundColor={this.state.answer === 'correct' ? colors.accentColor : 'transparent'}
              borderColor={colors.accentColor}
            />
            <OvalButton
              onPress={() => this.setAnswer('incorrect')}
              containerStyle={{ flex: 1 }}
              title={'Incorrect'}
              backgroundColor={this.state.answer === 'incorrect' ? colors.error : 'transparent'}
              borderColor={colors.error}
            />
          </View>
          <CardFooter pages={this.props.pages} index={this.props.index}/>
        </View>
      </View>
    );
  }

  render() {
    const card = this.props.card;
    return (
      <FlipView
        style={{ flex: 1 }}
        isFlipped={this.state.isFlipped}
        front={this.cardFront(card)}
        back={this.cardBack(card)}
        flipEasing={Easing.out(Easing.ease)}
        flipAxis='y'
        flipDuration={500}
        perspective={1000}
      />
    );
  }
}


function mapStateToProps({ scores, activeDeck }) {
  return { scores, activeDeck };
}

export default connect(mapStateToProps)(Card);