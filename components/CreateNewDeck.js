import React from 'react';
import {connect} from 'react-redux';
import {Button, Input} from 'react-native-elements';
import {View, Text, TextInput} from 'react-native';
import {createNewDeck} from '../actions/decks';
import {generateId} from '../util/helpers';
import Toast from 'react-native-simple-toast';

class CreateNewDeck extends React.Component {
  state = {
    text:''
  };

  handleCreateDeck(){
    const deckId = generateId();
    const deckName = this.state.text;
    const deckCreated = Date.now();
    if(deckName === ''){
      Toast.show('Deck name cannot be empty')
    }
    else{
      this.props.dispatch(createNewDeck(deckId,deckName,deckCreated));
      this.props.navigation.navigate('DeckDetails',{deck:deckId})
      //Todo: Persist the store in the AsyncStorrage
    }


  }
  render() {
    return (
      <View>
        <Text>
          Enter Deck Name
        </Text>
        <TextInput
          placeholder='New Deck Name'
          style={{height: 40}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
        title = 'Create'
        onPress = {()=>this.handleCreateDeck()}
        />
      </View>
    );
  }
}

export default connect()(CreateNewDeck);