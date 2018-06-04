import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Easing} from 'react-native';
import FlipView from './FlipView';
import {Text, Divider} from 'react-native-elements';
import * as colors from '../util/colors';
import {setAnswerToCorrect} from '../actions';
import {CardFooter, OvalButton} from './ui';

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
      <View style={styles.cardContainer}>
        <View style={styles.top}>
          <Text style={styles.title}>{card.question}</Text>
        </View>
        <OvalButton
          title='Flip'
          onPress={() => this.flipCard()}
        />
        <CardFooter pages={this.props.pages} index={this.props.index}/>
      </View>
    );
  }

  cardBack(card) {
    debugger;
    console.log(this.state.answer);
    return (
      <View style={styles.cardContainer}>
        <View style={styles.top}>
          <Text style={styles.title}>{card.question}</Text>
          <Divider style={{ marginVertical: 10 }}/>
          <Text style={styles.subtitle}>Correct answers:</Text>
          {card.options.map((o, i) => {
            if (o.answer) {
              return (
                <View key={i}>
                  <Text  style={styles.normal}> {o.text}</Text>
                </View>
              );
            }
          })}
        </View>

        <View style={styles.bottom}>
          <Text style={styles.normal }>Was your guess correct or incorrect?</Text>
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

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.disabled,
    backgroundColor: '#fff'
  },
  top: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    color: colors.secondaryText,
    fontSize: 22
  },
  subtitle: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 18
  },
  normal: {
    textAlign: 'center',
    color: colors.secondaryText
  }
});

function mapStateToProps({ scores, activeDeck }) {
  return { scores, activeDeck };
}

export default connect(mapStateToProps)(Card);