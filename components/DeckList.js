import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteDeck} from '../actions/decks';
import * as colors from '../util/colors';
import {MainButton} from './ui';
import DeckItem from './DeckItem';

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
      <View style={styles.container}>
        <Text h4 style={styles.title}>Choose a quiz to practice</Text>
        <ScrollView>
          {Object.keys(decks).map(id => (<DeckItem
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.lightText,
    alignItems: 'stretch'
  },
  title: {
    textAlign: 'center',
    color: colors.darkPrimary
  }
});

function mapStateToProps({ decks }) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);



