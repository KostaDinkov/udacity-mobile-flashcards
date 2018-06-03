import React from 'react';
import {connect} from 'react-redux';
import {Input, Card} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {createNewDeck} from '../actions/decks';
import {generateId} from '../util/helpers';
import Toast from 'react-native-simple-toast';
import * as colors from '../util/colors';
import {MainButton} from './ui';

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
      <View style={styles.container}>
        <Card title='Enter Deck Name'
              titleStyle={styles.cardTitle}
              containerStyle={styles.card}>

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

const styles = StyleSheet.create({

  card: {

    marginHorizontal: 0,
    borderRadius: 15
  },
  cardTitle: {
    color: colors.darkPrimary
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.lightText,

  },


});

export default connect()(CreateNewDeck);