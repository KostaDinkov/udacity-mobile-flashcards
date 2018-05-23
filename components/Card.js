import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import FlipCard from 'react-native-flip-card';
import {CheckBox, List} from 'react-native-elements';

export default class Card extends React.Component {

  renderItem = ({ item }) => (
    <CheckBox title={item.text}/>
  );

  render() {
    const card = this.props.card;
    return (
      <View>
        <Text>{card.question}</Text>
        <FlatList data={card.options} keyExtractor={(item, index) => '' + index} renderItem={this.renderItem}/>
      </View>
    );
  }
}



