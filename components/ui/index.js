import React from 'react';
import {Button, Badge, Divider,CheckBox} from 'react-native-elements'
import * as colors from '../../util/colors';
import {View,Text} from 'react-native'


export function MainButton(props){
  return(
    <Button
      title = {props.title}
      titleStyle={{color:colors.lightText}}
      buttonStyle = {{backgroundColor:colors.primary, marginVertical:10}}
      onPress = {props.onPress}
      disabled={props.disabled}
    />
  )
}

export function BadgeCustom(props){
  return(
    <Badge
      value = {props.value}
      containerStyle={{backgroundColor:colors.accentColor}}
      textStyle={{color:colors.primaryText}}
    />
  )
}

export function TextDivider(props){
  return(
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Divider style={{flex:1,marginRight:10}}/>
      <Text style={{color:colors.divider, fontSize:16}}>{props.text}</Text>
      <Divider style={{flex:1,marginLeft:10}}/>
    </View>
  )
}

export function CheckboxCustom(props){
  return(
    <CheckBox
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      title={props.title}
      containerStyle={{ flex: 1,
        borderRadius:15,
        borderColor:props.checked?colors.darkPrimary:colors.divider,
        backgroundColor:props.checked?colors.accentColor:'#FAFAFA',
        marginVertical: 10
      }}
      textStyle={{
        color:props.checked?colors.darkPrimary:colors.divider
      }}
      checked={props.checked}
      checkedColor={colors.darkPrimary}
      onPress={ props.onPress}

    />
  )

}

