import React from 'react';
import {View, KeyboardAvoidingView, StyleSheet, ScrollView} from 'react-native';
import Toast from 'react-native-simple-toast';
import {CheckBox, Button, Card, Input, Text, Divider} from 'react-native-elements';
import {connect} from 'react-redux';
import {generateId} from '../util/helpers';
import {addNewCard} from '../actions/cards';
import {addCard} from '../actions/decks';
import * as colors from '../util/colors';
import {MainButton} from './ui';

class AddNewCard extends React.Component {
  state = {
    question: '',
    options: [{ text: '', answer: false }, { text: '', answer: false }]
  };

  static navigationOptions = {
    title: 'Add New Question'
  };

  updateOptionText(i, optionText) {

    let options = this.state.options;
    options[i] = { ...options[i], text: optionText };
    this.setState({ options });
  }

  toggleOptionCorrect(i) {

    let options = this.state.options;
    options[i] = { ...options[i], answer: !options[i].answer };
    this.setState({ options });
  }

  addOption() {

    this.setState({ options: [...this.state.options, { text: '', answer: false }] });
  }

  removeOption(i) {
    let options = this.state.options.filter((e, index) => index !== i);
    this.setState({ options });
  }

  saveCard() {
    const deck = this.props.navigation.getParam('deck');
    let card = {
      question: this.state.question,
      options: this.state.options,
      id: 'cid' + generateId()
    };
    const inputCheckResult = AddNewCard.validateForm(card);
    if (inputCheckResult === true) {
      this.props.dispatch(addNewCard(card));
      this.props.dispatch(addCard(deck.id, card.id));
      //TODO persist the store
      this.props.navigation.navigate('DeckDetails', { deck: deck.id });
    }
    else {
      Toast.show(inputCheckResult, Toast.LONG);
    }

  }

  static validateForm(card) {
    if (card.question === '') {
      return 'Question text may not be empty!';
    }
    else if (card.options.filter(o => o.answer).length < 1) {
      return 'There must be at least one correct option';
    }
    else if (card.options.some(o => o.text === '')) {
      return 'Options must have text';
    }
    else return true;
  }

  render() {
    const deck = this.props.navigation.getParam('deck');

    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <Card
          title=
            {
              <View>
                <Text style={{ textAlign:'center',fontSize: 18, color: colors.secondaryText }}>Current Deck</Text>
                <Text style={{ textAlign:'center', fontSize: 22, color: colors.darkPrimary, fontWeight: 'bold' }}>{deck.name}</Text>
                <Divider style={{marginVertical:10}}/>
              </View>
            }
          containerStyle={styles.card}
        >
          <ScrollView
            style={{ maxHeight: '70%' }}>
            <Input
              label={'Question:'}
              containerStyle={{ width: '100%' }}
              placeholder='Enter question text here...'
              onChangeText={(question) => this.setState({ question })}
              value={this.state.question}
            />
            {
              this.state.options.map((option, i) => {
                return (
                  <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Input
                      containerStyle={{ width: '100%', flex: 6 }}
                      value={this.state.options[i].text}
                      placeholder={`Option ${i + 1} text here`}
                      onChangeText={(optionText) => this.updateOptionText(i, optionText)}
                    />
                    <CheckBox
                      checked={this.state.options[i].answer}
                      onPress={() => {
                        this.toggleOptionCorrect(i);
                      }}
                      center
                      checkedColor={colors.accentColor}
                      containerStyle={styles.checkBoxContainer}
                    />
                    <Button
                      clear
                      title={null}
                      disabled={this.state.options.length < 3}
                      icon={{
                        name: 'delete',
                        color: this.state.options.length < 3 ? colors.divider : colors.error
                      }}
                      onPress={() => this.removeOption(i)}
                    />
                  </View>
                );
              })
            }
          </ScrollView>
          <Text style={styles.hintText}>Hint - Check the checkboxes for the options that are correct answers to the question</Text>
          <MainButton
            title='Add Option'
            onPress={() => this.addOption()}
          />
          <MainButton
            title='Save Card'
            onPress={() => this.saveCard()}
          />
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  card: {
    marginHorizontal: 0,
    borderRadius: 15
  },
  cardTitle: {
    color: colors.darkPrimary
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.lightText

  },
  hintText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: colors.disabled,
    marginVertical: 10
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
    justifyContent: 'center'
  }
});

export default connect(({ cards }) => ({ cards }))(AddNewCard);
