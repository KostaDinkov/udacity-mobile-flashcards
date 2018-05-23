import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class AddQuestion extends React.Component{

  render(){
    const deck = this.props.navigator.getProp('deck');
    const cards = this.props.cards;
    return(
      <View>
        <Text>
          {deck.name}
        </Text>
      </View>
    )
  }
}

function mapStateToProps({cards}){
  return {cards};
}


export default connect(mapStateToProps)(AddQuestion)
