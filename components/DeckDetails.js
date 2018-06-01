import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {Button, Icon, CheckBox, Card} from 'react-native-elements';
import {connect} from 'react-redux';

class DeckDetails extends React.Component {

  state={
    quizMode:true,
    flashCardsMode:false
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Deck Details',
    headerLeft: <Icon name="arrow-back"
                      onPress={() => navigation.navigate('Home')}
                      size={26}
                      style={{ marginLeft: 15 }}

    />
  });

  toggleMode(mode){
    this.setState({
      quizMode:mode==='quiz',
      flashCardsMode:mode==='flashCards'
    })
  }

  render() {
    const deck = this.props.decks[this.props.navigation.getParam('deck', 'NO DECKS')];
    const name = deck.name;
    const cardCount = deck.cards.length;
    return (
      <View style={{ padding: 20 }}>
        <Text>{name}</Text>
        <Text>Contains {cardCount} cards</Text>
        <Card title={'Choose Mode'}>
          <View style={{ flexDirection: 'row' }}>

            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              title={'Quiz'}
              containerStyle={{flex:1,marginLeft:0,marginVertical:10}}
              checked = {this.state.quizMode}
              onPress = {()=> this.toggleMode('quiz')}
            />
            <CheckBox
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              title={'Flash Cards'}
              containerStyle={{flex:1, marginRight:0, marginVertical:10}}
              checked = {!this.state.quizMode}
              onPress = {()=> this.toggleMode('flashCards')}
            />
          </View>
          <Button
            title='Practice'
            disabled={deck.cards.length < 1}
            onPress={() => this.props.navigation.navigate('DeckPractice', { deck,isQuizMode:this.state.quizMode })}/>
        </Card>


        <Button title='Add Question' onPress={() => this.props.navigation.navigate('AddQuestion', { deck })}/>
      </View>

    );
  }
}

export default connect(({ decks }) => ({ decks }))(DeckDetails);