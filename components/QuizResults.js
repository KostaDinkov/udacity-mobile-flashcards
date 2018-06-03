import React from 'react';
import {View, BackHandler, StyleSheet} from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';
import {connect} from 'react-redux';
import {MaterialIcons} from '@expo/vector-icons';
import * as colors from '../util/colors';

class QuizResults extends React.Component {
  correctCount = 0;
  totalCount = 0;

  getScore() {
    return ((this.correctCount / this.totalCount) * 100).toFixed(1);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz Results',
    headerLeft: <MaterialIcons name="arrow-back"
                               onPress={() => navigation.navigate('Home')}
                               size={25}
                               style={{ marginLeft: 15 }}

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

  getBadgeColor() {
    const score = this.getScore();
    debugger;
    switch (true) {
      case (score > 80):
        return colors.accentColor;
      case(score > 50):
        return colors.primary;
      case(score > 20):
        return colors.darkPrimary;
      default:
        return colors.error;
    }
  }

  render() {

    const answers = this.props.activeDeck.answers;

    return (
      <View style={styles.container}>
        <Card
          title='Quiz Results'
          containerStyle={styles.card}
        >
          <View>
            <View>
              {Object.keys(answers).map((k, i) => (
                <View key={k}>
                  <Text style={styles.centered}>
                    Question {i + 1}: {this.isCorrect(answers[k])
                    ? <Text style={{ color: colors.primary }}>Correct</Text>
                    : <Text style={{ color: colors.error }}>Incorrect</Text>}
                  </Text>
                </View>
              ))}
            </View>

            <Text style={{textAlign:'center',marginVertical:10,fontSize:18, color:colors.darkPrimary}}>Total Correct Answers: {this.correctCount} of {this.totalCount}</Text>

            <Badge
              containerStyle={{
                marginTop: 20,
                backgroundColor: this.getBadgeColor()
              }}
            >
              <Text h4 style={{ color: colors.lightText }}>Score: {this.getScore()}%</Text>
            </Badge>

          </View>
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
  },
  centered: {
    textAlign: 'center'
  }

});

export default connect(({ activeDeck }) => ({ activeDeck }))(QuizResults);