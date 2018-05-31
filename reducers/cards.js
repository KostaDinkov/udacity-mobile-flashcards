import {ADD_NEW_CARD} from '../actions/cards';

function cards(state = {}, action) {
  switch (action.type) {
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.card.id]:action.card
      };
    default:
      return state;
  }
}

export default cards;