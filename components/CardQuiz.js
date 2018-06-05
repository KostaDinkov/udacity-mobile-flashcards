import React from 'react';
import {connect} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {CheckBox, Divider, Text} from 'react-native-elements';
import {toggleCheckBox} from '../actions/activeDeck';
import * as colors from '../util/colors';
import {CardFooter} from './ui';
import sharedStyles from './styles'

class CardQuiz extends React.Component {

  render() {
    const card = this.props.card;
    return (
      <View style={sharedStyles.cardContainer}>
        <View style={{flex:1}}>
          <Text style={sharedStyles.questionText}>{card.question}</Text>
          <Divider style={sharedStyles.divider}/>
          <ScrollView>
            {card.options.map((o, i) => (
              <CheckBox
                key={'check' + i}
                title={o.text}
                containerStyle={{ marginHorizontal: 0, marginLeft: 0, marginRight: 0 }}
                checked={this.props.activeDeck.answers[card.id][i].isChecked}
                checkedColor={colors.primary}
                onPress={() => {
                  this.props.dispatch(toggleCheckBox(card.id, i));
                }}
              />
            ))}
          </ScrollView>
        </View>
        <CardFooter pages={this.props.pages} index={this.props.index}/>
      </View>
    );
  }
}

function mapStateToProps({ scores, activeDeck }) {
  return { scores, activeDeck };
}

export default connect(mapStateToProps)(CardQuiz);