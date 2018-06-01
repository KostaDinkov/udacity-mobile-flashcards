import {ADD_QUESTION_SCORE, CREATE_DECK_SCORES, INIT_ACTIVE_DECK, SET_ANSWER_CORRECT, TOGGLE_CHECKBOX} from '../actions';
import {combineReducers} from 'redux';
import React from 'react';
import decks from './decks';
import cards from './cards';

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

    case SET_ANSWER_CORRECT:
      debugger;
      let answers = {};
      let cardId= action.cardId;
      for (let optionIndex of Object.keys(state.answers[cardId])) {
        let shouldBeChecked = state.answers[cardId][optionIndex].shouldBeChecked;
        answers[cardId]={...answers[cardId],[optionIndex] : { isChecked: shouldBeChecked, shouldBeChecked }};
      }

      return {
        ...state,
        answers:{...state.answers,...answers}
      };

    default:
      return state;

  }

}

export function scores(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION_SCORE:

      const entry = { [action.deckId]: { ...state[action.deckId], [action.cid]: action.answer } };
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