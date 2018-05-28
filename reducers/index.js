
import {ADD_QUESTION_SCORE, CREATE_DECK_SCORES, INIT_ACTIVE_DECK, TOGGLE_CHECKBOX} from '../actions';
import {combineReducers} from 'redux'
import React from 'react'

export function decks(state={},action){
  switch (action.type){
    default:return state;
  }
}

export function cards(state={},action){
  switch (action.type){
    default:return state;
  }
}

export function activeDeck(state={},action){

  switch(action.type){
    case INIT_ACTIVE_DECK:
      return{...action.activeDeck};
    case TOGGLE_CHECKBOX:

      return{
        ...state,
        [action.cardId]:{...state[action.cardId],[action.checkBoxIndex]:!state[action.cardId][action.checkBoxIndex]}
      };
    default:return state;

  }



}

export function scores(state = {},action){
  switch(action.type){
    case ADD_QUESTION_SCORE:

      const entry =  {[action.deckId]:{...state[action.deckId],[action.cid]:action.isCorrect}};
      return {
        ...state,
        ...entry
      };
    case CREATE_DECK_SCORES:
      return{
        ...state,
      [action.deckId]:{}
    };
    default: return state;
  }
}

export default combineReducers({decks,cards,scores,activeDeck});