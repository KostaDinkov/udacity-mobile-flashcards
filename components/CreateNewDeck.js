import React from 'react';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {View} from 'react-native';
import {Input, Card} from 'react-native-elements';
import {createNewDeck} from '../actions/decks';
import {generateId} from '../util/helpers';
import {MainButton} from './ui';
import sharedStyles from './styles'

class CreateNewDeck extends React.Component {
  state = {
    text: ''
  };

  static navigationOptions = {
    title: 'Create New Deck'
  };

  handleCreateDeck() {
    const deckId = generateId();
    const deckName = this.state.text;
    const deckCreated = Date.now();
    if (deckName === '') {
      Toast.show('Deck name cannot be empty');
    }
    else {
      this.props.dispatch(createNewDeck(deckId, deckName, deckCreated));
      this.props.navigation.navigate('DeckDetails', { deck: deckId });
    }
  }

  render() {
    return (
      <View style={sharedStyles.container}>
        <Card title='Enter Deck Name'
              titleStyle={sharedStyles.h2center}
              containerStyle={sharedStyles.card}
        >
          <Input
            placeholder='New Deck Name'
            containerStyle={{width:'100%'}}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            errorMessage={null}
          />
          <MainButton
            title='Create'
            onPress={() => this.handleCreateDeck()}
          />
        </Card>
      </View>
    );
  }
}

export default connect()(CreateNewDeck);