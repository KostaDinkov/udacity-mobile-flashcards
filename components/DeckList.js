import React from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux'


class DeckList extends React.Component{


  render(){
    debugger;

    const {decks} = this.props.store;
    return (
      <View>
        <Text>Available Decks:</Text>
        {Object.keys(decks).map(id=>(
          <View key = {id}>
            <Text>{decks[id].name}</Text>
            <Text>Questions:{decks[id].cards.length}</Text>
          </View>
        ))}
      </View>
    )
  }
}

function mapStateToProps(store){
  return {store};
}
export default connect(mapStateToProps)(DeckList);



