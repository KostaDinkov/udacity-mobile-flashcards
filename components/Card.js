import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Easing, TouchableOpacity} from 'react-native';
import FlipView from './FlipView';
import {Text, Button, Divider} from 'react-native-elements';
import * as colors from '../util/colors';
import {setAnswerToCorrect} from '../actions';

const FlipButton = (props) => (
  <Button
    title='Flip'
    clear
    titleStyle={{
      color: colors.secondaryText
    }}
    buttonStyle={[
      styles.roundClearBtn,
      { borderColor: colors.secondaryText }
    ]}
    onPress={() => props.toggle()}>
  </Button>

);

class Card extends React.Component {
  state = {
    isFlipped: false,
    answer: 'not answered'
  };

  toggleCorrect(result) {

    const cardId = this.props.card.id;

    this.setState({
      answer: result
    });
    if (result === 'correct') {
      this.props.dispatch(setAnswerToCorrect(cardId));
    }

  }

  toggleFlip() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  cardFront(card) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.top}>
          <Text h3>{card.question}</Text>
        </View>
        <View style={styles.bottom}>
          <FlipButton toggle={this.toggleFlip.bind(this)}/>
        </View>
      </View>
    );
  }

  cardBack(card) {

    return (
      <View style={styles.cardContainer}>
        <View style={styles.top}>
          <Text h4>{card.question}</Text>
          <Divider/>
          <Text>Correct answers:</Text>
          {card.options.map((o, i) => {
            if (o.answer) {
              return (
                <Text key={i}>{o.text}</Text>
              );
            }
          })}
        </View>

        <View style={styles.bottom}>
          <Text style={{ textAlign: 'center' }}>Was your guess correct or incorrect?</Text>
          <View style={{ flexDirection: 'row' }}>
            <Button
              TouchableComponent={TouchableOpacity}
              titleStyle={{ color: colors.primaryText }}
              buttonStyle={[styles.roundClearBtn,
                {
                  borderColor: colors.accentColor,
                  backgroundColor: this.state.answer ==='correct' ? colors.accentColor : 'transparent'
                }
              ]}
              onPress={() => this.toggleCorrect('correct')}
              containerStyle={{ flex: 1 }}
              title={'Correct'}/>
            <Button
              TouchableComponent={TouchableOpacity}
              titleStyle={{ color: colors.primaryText }}
              buttonStyle={[
                styles.roundClearBtn,
                {
                  borderColor: colors.error,
                  backgroundColor: this.state.answer ==='incorrect'? colors.error : 'transparent'
                }
              ]}
              onPress={() => this.toggleCorrect('incorrect')}
              containerStyle={{ flex: 1 }}
              title={'Incorrect'}/>
          </View>

        </View>
      </View>
    );
  }

  render() {
    const card = this.props.card;
    return (
      <View style={styles.container}>
        <FlipView
          style={{ flex: 1 }}
          isFlipped={this.state.isFlipped}
          front={this.cardFront(card)}
          back={this.cardBack(card)}
          flipEasing={Easing.out(Easing.ease)}
          flipAxis='y'
          flipDuration={500}
          perspective={1000}
        >
        </FlipView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    elevation: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff'
  },
  textButton: {
    textAlign: 'center'
  },
  top: {
    flex: 1
  },
  bottom: {
    justifyContent: 'flex-end'

  },
  roundClearBtn: {
    elevation: 0,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20
  }
});

function mapStateToProps({ scores, activeDeck }) {
  return { scores, activeDeck };
}

export default connect(mapStateToProps)(Card);