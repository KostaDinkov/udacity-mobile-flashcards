import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Card from './Card';
import {Pages} from 'react-native-pages';
import {initActiveDeck} from '../actions';

class AddQuestion extends React.Component {

  componentWillMount(){

    const cards= this.props.deckCards;
    this.props.dispatch(initActiveDeck(cards))
  }
  render() {
    const deck = this.props.navigation.getParam('deck');
    const cards = this.props.deckCards;
    return (
      <View style={{ flex:1} }>

        <Pages indicatorPosition='top' containerStyle={{flex:1,justifyContent:'center'}}>
          {Object.keys(cards).map(cid => (
            <Card  key={cid} card={cards[cid]} deck={deck}/>
          ))}
        </Pages>
      </View>
    );
  }
}

function mapStateToProps({ cards },ownProps) {
  const deck = ownProps.navigation.getParam('deck');
  const deckCards = Object.keys(cards)
                      .filter(c=>deck.cards.includes(c))
                      .map(c=>cards[c]);
  return { deckCards,cards   };
}

export default connect(mapStateToProps)(AddQuestion);