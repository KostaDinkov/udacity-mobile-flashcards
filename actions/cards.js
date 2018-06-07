import {ADD_NEW_CARD} from './actionTypes';

export function addNewCard(card){
  return{
    type:ADD_NEW_CARD,
    card
  }
}