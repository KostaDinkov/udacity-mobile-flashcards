import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Card from './Card';
import {Pages} from 'react-native-pages';

class AddQuestion extends React.Component {

  render() {
    const deck = this.props.navigation.getParam('deck');
    const cards = this.props.cards;
    return (
        <View style={{flex:1}}>
          <Text>{deck.name}</Text>
        <Pages>
          <Card card={cards['cid1']} />
          <Card card={cards['cid2']} />
        </Pages>
        </View>
    );
  }
}

function mapStateToProps({ cards }) {
  return { cards };
}

export default connect(mapStateToProps)(AddQuestion);