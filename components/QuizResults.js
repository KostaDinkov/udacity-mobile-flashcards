import React from 'react';
import {View, Text, BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {MaterialIcons} from '@expo/vector-icons';

class QuizResults extends React.Component {
  correctCount = 0;
  totalCount = 0;

  static navigationOptions = ({navigation})=>({
    title: 'Quiz Results',
    headerLeft:<MaterialIcons name="arrow-back"
                              onPress={()=>navigation.navigate('Home')}
                              size={25}
                              style={{marginLeft:15}}

    />
  });

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('Home');
      return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => false);
  }

  isCorrect(ans) {
    this.totalCount++;
    for (let i of Object.keys(ans)) {
      if (ans[i].isChecked !== ans[i].shouldBeChecked) {
        return false;
      }
    }
    this.correctCount++;
    return true;
  }

  render() {

    const answers = this.props.activeDeck.answers;
    debugger;

    return (
      <View>
        <Text>Quiz Results:</Text>
        {Object.keys(answers).map((k, i) => (
          <View key={k}>
            <Text>
              Question {i + 1}: {this.isCorrect(answers[k]) ? 'Correct' : 'Incorrect'}
            </Text>
          </View>
        ))}
        <Text>Totals: {this.correctCount} of {this.totalCount} - {(this.correctCount / this.totalCount) * 100}%</Text>

      </View>
    );
  }
}

export default connect(({ activeDeck }) => ({ activeDeck }))(QuizResults);