import React from 'react';
import {Button, Badge, Divider, Icon} from 'react-native-elements';
import * as colors from '../../util/colors';
import {View, Text, TouchableOpacity} from 'react-native';
import sharedStyles from '../styles';

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
        color={props.index === 0 ? 'transparent' : colors.disabled}
      />
      <Text style={sharedStyles.hintText}>
        Card {props.index + 1} of {props.pages}
      </Text>
      <Icon
        type='entypo'
        name='chevron-thin-right'
        color={props.index === props.pages - 1 ? 'transparent' : colors.disabled}
      />
    </View>
  );

}

export const CardTitle = (props) => (
  <View>
    <Text style={sharedStyles.h3}>{props.info}</Text>
    <Text style={sharedStyles.h2center}>{props.title}</Text>
    <Divider style={sharedStyles.divider}/>
  </View>
);



