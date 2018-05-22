import React from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux'
import {importData} from '../actions/index';
import {fetchAllData } from '../api/data'

class DeckList extends React.Component{

  componentWillMount(){

    let data = fetchAllData();
    this.props.dispatch(importData(data));
  }

  render(){
    return (
      <View>
        <Text>{JSON.stringify(this.props.store)}</Text>
      </View>
    )
  }
}

function mapStateToProps(store){
  return {store};
}
export default connect(mapStateToProps)(DeckList);



