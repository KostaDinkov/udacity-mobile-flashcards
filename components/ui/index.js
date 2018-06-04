import React from 'react';
import {Button, Badge, Divider, CheckBox, Icon} from 'react-native-elements';
import * as colors from '../../util/colors';
import {View, Text, TouchableOpacity} from 'react-native';

export function MainButton(props) {
  return (
    <Button
      title={props.title}
      titleStyle={{ color: colors.lightText }}
      buttonStyle={{ backgroundColor: colors.primary, marginVertical: 10 }}
      onPress={props.onPress}
      disabled={props.disabled}
    />
  );
}

export function BadgeCustom(props) {
  return (
    <Badge
      value={props.value}
      containerStyle={{ backgroundColor: colors.accentColor }}
      textStyle={{ color: colors.primaryText }}
    />
  );
}

export function TextDivider(props) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Divider style={{ flex: 1, marginRight: 10 }}/>
      <Text style={{ color: colors.divider, fontSize: 16 }}>{props.text}</Text>
      <Divider style={{ flex: 1, marginLeft: 10 }}/>
    </View>
  );
}


export class OvalButton extends React.Component {
  static defaultProps = {
    borderColor: colors.secondaryText,
    backgroundColor: 'transparent',
    containerStyle: {},
    title: 'Button'
  };

  render() {
    return (
      <Button
        TouchableComponent={TouchableOpacity}
        title={this.props.title}

        titleStyle={{
          color: colors.secondaryText
        }}
        buttonStyle=
          {{
            elevation: 0,
            margin: 10,
            borderWidth: 2,
            borderRadius: 20,
            borderColor: this.props.borderColor,
            backgroundColor: this.props.backgroundColor
          }}
        containerStyle={this.props.containerStyle}
        onPress={this.props.onPress}
      />
    );
  }
}

export function CardFooter(props) {

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Icon
        type='entypo'
        name='chevron-thin-left'
        color={props.index === 0 ? 'transparent' : colors.secondaryText}
      />
      <Text style={{
        textAlign: 'center',
        fontStyle: 'italic',
        color: colors.secondaryText
      }}
      >
        Card {props.index + 1} of {props.pages}
      </Text>
      <Icon
        type='entypo'
        name='chevron-thin-right'
        color={props.index === props.pages - 1 ? 'transparent' : colors.secondaryText}
      />
    </View>
  );

}

export function ResultsTitle(props) {
  return (
    <View style={{ justifyContent: 'center' }}>
    <Text style={{ textAlign: 'center', fontSize:20,color:colors.secondaryText }}>Results for </Text>
    <Text style={{ textAlign: 'center', color: colors.primary,fontSize:22,fontWeight:'bold' }}>{props.deckName}</Text>
    <Divider style={{marginVertical:10}}/>
  </View>);
}



