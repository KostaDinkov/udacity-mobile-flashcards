import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback,ScrollView} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteDeck} from '../actions/decks';

class DeckList extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };

  handleDeleteDeck(id){
    //TODO confirm deletion
    this.props.dispatch(deleteDeck(id));
  }

  render() {
    debugger;
    const decks = this.props.decks;
    return (
      <View style={styles.container}>
        <Text>Available Decks:</Text>
        <ScrollView>
          {Object.keys(decks).map(id => (
            <ListItem
              key={id}
              rightIcon={<Icon
                size={22}
                color={'#bc1d0d'}
                name={'delete'}
                raised
                onPress={()=>this.handleDeleteDeck(id)}
              />}
              onPress={() => this.props.navigation.navigate('DeckDetails', { deck: id })}
              title={decks[id].name}
              subtitle={`Cards:${decks[id].cards.length}`}
            >
            </ListItem>
          ))}
        </ScrollView>
        <Button title='Create New Deck' onPress={() => this.props.navigation.navigate('CreateNewDeck')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'

  },
  deckItem: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 2,
    margin: 2,
    flexDirection: 'row'
  },


});

function mapStateToProps({decks}) {
  return { decks };
}

export default connect(mapStateToProps)(DeckList);



