import React from 'react';
import {connect} from 'react-redux';
import {View, ScrollView, StyleSheet} from 'react-native';
import {CheckBox, Divider, Text, Icon} from 'react-native-elements';
import {toggleCheckBox} from '../actions';
import * as colors from '../util/colors';

class CardQuiz extends React.Component {

  render() {
    const card = this.props.card;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.top}>
          <Text style={styles.questionText}>{card.question}</Text>
          <Divider style={{ marginBottom: 10 }}/>
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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Icon
            type='entypo'
            name='chevron-thin-left'
            color={this.props.index===0?'transparent':colors.secondaryText}
          />
          <Text style={styles.footerText}>
            Card {this.props.index + 1} of {this.props.pages}
          </Text>
          <Icon
            type='entypo'
            name='chevron-thin-right'
            color={this.props.index===this.props.pages-1?'transparent':colors.secondaryText}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.disabled,
    backgroundColor: '#fff'
  },
  questionText: {
    marginBottom: 10,
    color: colors.secondaryText,
    fontSize: 16
  },
  footerText: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: colors.secondaryText
  },
  top: {
    flex: 1
  }
});

function mapStateToProps({ scores, activeDeck }) {
  return { scores, activeDeck };
}

export default connect(mapStateToProps)(CardQuiz);