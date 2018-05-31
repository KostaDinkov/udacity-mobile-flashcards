import {ADD_QUESTION_SCORE, CREATE_DECK_SCORES, INIT_ACTIVE_DECK, TOGGLE_CHECKBOX} from '../actions';
import {combineReducers} from 'redux';
import React from 'react';
import decks from './decks'
import cards from './cards'


export function activeDeck(state = {}, action) {

  switch (action.type) {

    case INIT_ACTIVE_DECK:
      return { ...action.activeDeck };

    case TOGGLE_CHECKBOX:
      const isChecked = state.answers[action.cardId][action.checkBoxIndex].isChecked;
      const card = state.answers[action.cardId];
      const updatedAnswers =
        {
          ...state.answers,
          [action.cardId]: { ...card, [action.checkBoxIndex]: { ...card[action.checkBoxIndex], isChecked: !isChecked } }
        };
      return {
        ...state,
        answers: updatedAnswers
      };

    default:
      return state;

  }

}

export function scores(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION_SCORE:

      const entry = { [action.deckId]: { ...state[action.deckId], [action.cid]: action.isCorrect } };
      return {
        ...state,
        ...entry
      };
    case CREATE_DECK_SCORES:
      return {
        ...state,
        [action.deckId]: {}
      };
    default:
      return state;
  }
}

export default combineReducers({ decks, cards, scores, activeDeck });