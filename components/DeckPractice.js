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
      <View style={{ flex:1} }>

        <Pages indicatorPosition='top' containerStyle={{flex:1,justifyContent:'center'}}>
          {Object.keys(cards).map(cid => (
            <Card  key={cid} card={cards[cid]}/>
          ))}
        </Pages>
      </View>
    );
  }
}

function mapStateToProps({ cards }) {
  return { cards };
}

export default connect(mapStateToProps)(AddQuestion);