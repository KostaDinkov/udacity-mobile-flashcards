import React from 'react';
import * as colors from '../util/colors';
import {Text, ListItem, Card, Icon} from 'react-native-elements';
import {BadgeCustom} from './ui';
import {View, StyleSheet} from 'react-native';

export default class DeckItem extends React.Component {
  render() {
    const deckId = this.props.deckId;
    const deckName = this.props.deckName;
    const cardCount = this.props.cardCount;

    return (

      <Card containerStyle={styles.card}>
        <ListItem
          containerStyle={styles.listItem}
          rightIcon={<Icon
            size={22}
            color={colors.error}
            name={'delete'}
            raised
            onPress={() => this.props.handleDeleteDeck(deckId)}
          />}
          onPress={() => this.props.navigate('DeckDetails', { deck: deckId })}
          title={deckName}
          subtitle={(
            <View style={styles.subtitle}>
              <Text>Contains </Text>
              <BadgeCustom value={cardCount}/>
              <Text> cards</Text>
            </View>)}
        >
        </ListItem>
      </Card>

    );
  }
}

const styles = StyleSheet.create({

  listItem: {
    padding: 0
  },
  card: {
    marginHorizontal: 0,
    borderRadius: 15
  },
  subtitle: {
    flexDirection: 'row',
    marginTop: 10
  }
});