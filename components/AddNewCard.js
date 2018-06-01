import React from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import Toast from 'react-native-simple-toast'
import {CheckBox, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {generateId} from '../util/helpers';
import {addNewCard} from '../actions/cards'
import {addCard} from '../actions/decks';

class AddNewCard extends React.Component {
  state = {
    question: '',
    options: [{text:'',answer:false},{text:'',answer:false}]
  };

  updateOptionText(i, optionText) {

    let options = this.state.options;
    options[i] = { ...options[i], text: optionText };
    this.setState({ options });
  }

  toggleOptionCorrect(i) {
    let options = this.state.options;
    options[i] = { ...options[i], answer: !options[i].isCorrect };
    this.setState({ options });
  }

  addOption() {

    this.setState({ options: [...this.state.options, { text: '', answer: false }] });
  }

  removeOption(i){
    let options = this.state.options.filter((e,index)=> index!==i);
    this.setState({options})
  }

  saveCard(){
    const deck = this.props.navigation.getParam('deck');
    let card = {
      question:this.state.question,
      options: this.state.options,
      id:'cid'+generateId()
    };
    const inputCheckResult = AddNewCard.checkInputs(card);
    if(inputCheckResult === true){
      this.props.dispatch(addNewCard(card));
      this.props.dispatch(addCard(deck.id,card.id));
      //TODO persist the store
      this.props.navigation.navigate('DeckDetails',{deck:deck.id})
    }
    else{
      Toast.show(inputCheckResult,Toast.LONG)
    }

  }

  static checkInputs(card){
    if(card.question ===''){
      return 'Question text may not be empty!';
    }
    else if (card.options.filter(o => o.answer).length < 1){
      return 'There must be at least one correct option'
    }
    else if (card.options.some(o=>o.text === '')){
      return 'Options must have text'
    }
    else return true;
  }

  render() {

    const deck = this.props.navigation.getParam('deck');

    return (
      <KeyboardAvoidingView style={{flex:1}}   enabled >
        <Text>
          {deck.name}
        </Text>
        <Text>
          Question:
        </Text>
        <TextInput
          placeholder='Enter question text here...'
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
        />
        <Text>
          Options:
        </Text>
        {

          this.state.options.map((option, i) => {
            return (

              <View key={i} style={{  flexDirection: 'row' }}>

                <TextInput
                  value={this.state.options[i].text}
                  placeholder='Enter option text here'
                  onChangeText={(optionText) => this.updateOptionText(i, optionText)}
                  style={{flex:6}}
                />
                <CheckBox
                  checked={this.state.options[i].isCorrect}
                  onPress={() => {
                    this.toggleOptionCorrect(i);
                  }}
                  center
                  containerStyle={{backgroundColor:'transparent', borderWidth:0, margin:0,padding:0,marginLeft:0,marginRight:0, flex:1, justifyContent:'center'}}

                />
                <Button
                  rounded
                  title={"x"}
                  disabled = {this.state.options.length<3}
                  backgroundColor={'red'}
                  containerViewStyle={{flex:1}}
                  onPress={()=>this.removeOption(i)}/>
              </View>
            );
          })
        }
        <Button
          title='Add Option'
          onPress={() => this.addOption()}
        />
        <Button
          title='Save Card'
          onPress={() => this.saveCard()}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps({ cards }) {
  return { cards };
}

export default connect(mapStateToProps)(AddNewCard);
