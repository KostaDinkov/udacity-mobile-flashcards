import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {connect} from 'react-redux';


class DeckList extends React.Component {

  static navigationOptions={
    title:'Home'
  };
  componentWillMount(){
    console.log(this.props.store)
  }
  render() {

    const { decks } = this.props.store;
    return (
      <View style={styles.container}>
        <Text>Available Decks:</Text>
        {Object.keys(decks).map(id => (
          <TouchableNativeFeedback
            key={id}
            onPress={()=> this.props.navigation.navigate('DeckDetails',{deck:decks[id]})}
          >
            <View style={styles.deckItem}>
              <Text>{decks[id].name}</Text>
              <Text>Cards:{decks[id].cards.length}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  deckItem: {
    backgroundColor: '#ccc',
    padding: 2,
    margin: 2
  }
});

function mapStateToProps(store) {
  return { store };
}

export default connect(mapStateToProps)(DeckList);



