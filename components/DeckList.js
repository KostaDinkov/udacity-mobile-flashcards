import React from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {deleteDeck} from '../actions/decks';
import {MainButton} from './ui';
import DeckItem from './DeckItem';
import sharedStyles from './styles'

class DeckList extends React.Component {

  static navigationOptions = {
    title: 'Mobile Flashcards'
  };

  handleDeleteDeck(id) {
    //TODO confirm deletion
    this.props.dispatch(deleteDeck(id));
  }

  render() {
    const decks = this.props.decks;
    return (
      <View style={sharedStyles.container}>
        <Text h4 style={sharedStyles.h1}>Choose a quiz to practice</Text>
        <ScrollView>
          {Object.keys(decks).map(id => (
            <DeckItem
              key={id}
              deckId={id}
              deckName={decks[id].name}
              cardCount={decks[id].cards.length}
              handleDeleteDeck={this.handleDeleteDeck.bind(this)}
              navigate={this.props.navigation.navigate.bind(this)}
            />))}
        </ScrollView>
        <MainButton
          title='Create New Deck'
          onPress={() => this.props.navigation.navigate('CreateNewDeck')}
        />
      </View>
    );
  }
}

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);



