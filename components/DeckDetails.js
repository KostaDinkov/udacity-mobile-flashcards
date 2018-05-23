import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Button} from 'react-native';


export default class DeckDetails extends React.Component {

  static navigationOptions = {
    title:'Deck Details'
  };
  render() {
    const deck = this.props.navigation.getParam('deck','NO DECKS');
    const name = deck.name ;
    const cardCount = deck.cards.length;
    return (
      <View>
        <Text>{name}</Text>
        <Text>Contains {cardCount} cards</Text>
        <Button title='Practice' onPress={()=>this.props.navigation.navigate('DeckPractice',{deck})}/>
        <Button title='Add Question' onPress={()=>this.props.navigation.navigate('AddQuestion',{deck})}/>
      </View>

    );
  }
}