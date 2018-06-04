import React from 'react';
import * as colors from '../util/colors';
import {Text, Card, Icon} from 'react-native-elements';
import {BadgeCustom} from './ui';
import {View, TouchableOpacity} from 'react-native';

export default class DeckItem extends React.Component {
  render() {
    const deckId = this.props.deckId;
    const deckName = this.props.deckName;
    const cardCount = this.props.cardCount;

    return (
      <Card containerStyle={{
        marginHorizontal: 0,
        borderRadius: 15
      }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => this.props.navigate('DeckDetails', { deck: deckId })}>
              <Text style={{ color: colors.darkPrimary, fontSize: 18, fontWeight: 'bold' }}>{deckName}</Text>
              <View style={{
                flexDirection: 'row',
                marginTop: 10
              }}>
                <Text style={{ color: colors.secondaryText }}>Contains </Text>
                <BadgeCustom value={cardCount}/>
                <Text style={{ color: colors.secondaryText }}> cards</Text>
              </View>
            </TouchableOpacity>

          </View>
          <View>
            <Icon
              size={22}
              color={colors.error}
              name={'delete'}
              raised
              onPress={() => this.props.handleDeleteDeck(deckId)}/>
          </View>
        </View>
      </Card>
    );
  }
}
