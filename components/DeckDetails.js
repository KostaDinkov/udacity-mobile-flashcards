import React from 'react';
import {ToastAndroid, View, Text, StyleSheet, TouchableNativeFeedback, Button} from 'react-native';


export default class DeckDetails extends React.Component {

  static navigationOptions = {
    title:'Deck Details'
  };
  render() {
    const name = this.props.navigation.getParam('deck','NO DECKS').name;
    return (
      <View>
        <Text>{name}</Text>
        <Button title='Start Quiz'/>
        <Button title='Add Question'/>
      </View>

    );
  }
}