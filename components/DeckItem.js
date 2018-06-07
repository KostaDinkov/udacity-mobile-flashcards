import React from 'react';
import * as colors from '../util/colors';
import {Text, Card, Icon} from 'react-native-elements';
import {BadgeCustom} from './ui';
import {View, TouchableOpacity} from 'react-native';
import sharedStyles from './styles'

export default DeckItem =(props)=>{
  
    const deckId = props.deckId;
    const deckName = props.deckName;
    const cardCount = props.cardCount;
    return (
      <Card containerStyle={sharedStyles.card}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => props.navigate('DeckDetails', { deck: deckId })}>
              <Text style={sharedStyles.h2}>{deckName}</Text>
              <View style={{flexDirection: 'row',marginTop: 10}}>
                <Text style={sharedStyles.normalText}>Contains </Text>
                <BadgeCustom value={cardCount}/>
                <Text style={sharedStyles.normalText}> cards</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Icon
              size={22}
              color={colors.error}
              name={'delete'}
              raised
              onPress={() => props.handleDeleteDeck(deckId)}/>
          </View>
        </View>
      </Card>
    );
  
}
