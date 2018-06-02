import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Card, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {clearLocalNotification, setLocalNotification} from '../util/helpers';
import * as colors from '../util/colors';
import {CheckboxCustom, MainButton, TextDivider} from './ui';

class DeckDetails extends React.Component {

  state = {
    quizMode: true,
    flashCardsMode: false
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Deck Details',
    headerLeft: <Icon name="arrow-back"
                      onPress={() => navigation.navigate('Home')}
                      size={26}
                      color={colors.lightText}
                      style={{ marginLeft: 19 }}

    />
  });

  toggleMode(mode) {
    this.setState({
      quizMode: mode === 'quiz',
      flashCardsMode: mode === 'flashCards'
    });
  };

  handlePractice(deck) {
    clearLocalNotification().then(setLocalNotification);
    this.props.navigation.navigate('DeckPractice', { deck, isQuizMode: this.state.quizMode });
  };

  render() {
    const deck = this.props.decks[this.props.navigation.getParam('deck', 'NO DECKS')];
    const name = deck.name;
    const cardCount = deck.cards.length;
    return (
      <View style={styles.container}>
        <Text h4 style={styles.title}>{name}</Text>
        <Text h5 style={styles.subtitle}>Contains {cardCount} cards</Text>
        <Card
          title={'Choose Mode'}
          containerStyle={styles.card}
        >
          <View style={{ flexDirection: 'row' }}>

            <CheckboxCustom
              title={'Quiz'}
              checked={this.state.quizMode}
              onPress={()=>this.toggleMode('quiz')}
            />
            <CheckboxCustom
              title={'Flash Cards'}
              checked={!this.state.quizMode}
              onPress={() => this.toggleMode('flashCards')}
            />
          </View>
          <MainButton
            title='Practice'
            disabled={deck.cards.length < 1}
            onPress={() => this.handlePractice(deck)}
          />
          <TextDivider text='OR'/>
          <MainButton
            title='Add Question'
            onPress={() => this.props.navigation.navigate('AddQuestion', { deck })}/>
        </Card>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  card: {
    marginHorizontal: 0,
    borderRadius: 15
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.lightText,
    alignItems: 'stretch'
  },
  title: {
    textAlign: 'center',
    color: colors.darkPrimary
  },
  subtitle: {
    textAlign: 'center',
    color: colors.primary
  }

});

export default connect(({ decks }) => ({ decks }))(DeckDetails);