import React from 'react';
import {View} from 'react-native';
import {Icon, Card, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {clearLocalNotification, setLocalNotification} from '../util/helpers';
import * as colors from '../util/colors';
import { MainButton, OvalButton, TextDivider} from './ui';
import sharedStyles from './styles'

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
                      containerStyle={{ marginLeft: 20 }}

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
      <View style={sharedStyles.container}>
        <Text h4 style={sharedStyles.h1}>{name}</Text>
        <Text h5 style={sharedStyles.subtitle}>Contains {cardCount} cards</Text>
        <Card
          title={'Choose Mode'}
          containerStyle={sharedStyles.card}
        >
          <View style={{ flexDirection: 'row' }}>
            <OvalButton
              title={'Quiz'}
              backgroundColor={this.state.quizMode?colors.accentColor:'transparent'}
              onPress={()=>this.toggleMode('quiz')}
              containerStyle={{flex:1}}
            />
            <OvalButton
              title={'Flash Cards'}
              backgroundColor={!this.state.quizMode?colors.accentColor:'transparent'}
              onPress={() => this.toggleMode('flashCards')}
              containerStyle={{flex:1}}
            />
          </View>
          <MainButton
            title='Start a Quiz'
            disabled={deck.cards.length < 1}
            onPress={() => this.handlePractice(deck)}
          />
          <TextDivider text='OR'/>
          <MainButton
            title='Create New Question'
            onPress={() => this.props.navigation.navigate('AddQuestion', { deck })}/>
        </Card>
      </View>
    );
  }
}


export default connect(({ decks }) => ({ decks }))(DeckDetails);