import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {Button} from 'react-native-elements'
import {connect} from 'react-redux'


class DeckDetails extends React.Component {

  static navigationOptions = {
    title:'Deck Details'
  };
  render() {
    const deck = this.props.decks[this.props.navigation.getParam('deck','NO DECKS')];
    const name = deck.name ;
    const cardCount = deck.cards.length;
    return (
      <View>
        <Text>{name}</Text>
        <Text>Contains {cardCount} cards</Text>
        <Button
          title='Practice'
          disabled = {deck.cards.length<1}
          onPress={()=>this.props.navigation.navigate('DeckPractice',{deck})}/>
        <Button title='Add Question' onPress={()=>this.props.navigation.navigate('AddQuestion',{deck})}/>
      </View>

    );
  }
}


export default connect(({decks})=>({decks}))(DeckDetails)