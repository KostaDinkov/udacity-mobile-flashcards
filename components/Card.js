import React from 'react';
import {View, Text, ScrollView, StyleSheet, Easing, TouchableOpacity, Button} from 'react-native';
import FlipView from './FlipView';

import {CheckBox} from 'react-native-elements';

export default class Card extends React.Component {

  state = {
    isFlipped: false
  };

  cardFront(card) {
    return (
      <View style={styles.cardFront}>
        <View style={styles.top}>
          <Text>{card.question}</Text>
          <ScrollView>
            {card.options.map((o, i) => (
              <CheckBox key={i} title={o.text} containerStyle={{marginHorizontal:0}}/>
            ))}
          </ScrollView>
        </View>

        <View style={styles.bottom}>
          <Button title={'SUBMIT'} onPress={() => {
          }}/>
          <TouchableOpacity onPress={() => this.setState({ isFlipped: !this.state.isFlipped })}>
            <Text style={styles.textButton}>Flip</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }

  cardBack(card) {
    return (
      <View style={styles.cardFront}>
        <View style={styles.top}>
          <Text>{card.question}</Text>
          <Text>Correct answers:</Text>
          {card.options.map((o, i) => {
            if (o.isCorrect) {
              return (
                <Text key={i}>{o.text}</Text>
              );
            }
          })}
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => this.setState({ isFlipped: !this.state.isFlipped })}>
            <Text style={styles.textButton}>Flip</Text>
          </TouchableOpacity>
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
  cardFront: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 20,
    padding: 20,
    elevation: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor:'#fff'
  },
  textButton: {
    textAlign: 'center'

  },
  top: {
    flex: 1
  },
  bottom: {
    justifyContent: 'flex-end'
  }

});