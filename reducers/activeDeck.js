import {INIT_ACTIVE_DECK, SET_ANSWER_CORRECT, TOGGLE_CHECKBOX} from '../actions/activeDeck';

export default function activeDeck(state = {}, action) {
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
      let answers = {};
      let cardId = action.cardId;
      for (let optionIndex of Object.keys(state.answers[cardId])) {
        let shouldBeChecked = state.answers[cardId][optionIndex].shouldBeChecked;
        answers[cardId] = { ...answers[cardId], [optionIndex]: { isChecked: shouldBeChecked, shouldBeChecked } };
      }
      return {
        ...state,
        answers: { ...state.answers, ...answers }
      };

    default:
      return state;
  }
}