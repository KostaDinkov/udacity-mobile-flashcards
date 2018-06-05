import {ADD_NEW_CARD} from '../actions/cards';
import sampleData from '../util/sampleData'

const initialData = sampleData.cards;

function cards(state = initialData, action) {
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