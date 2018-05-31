export const CREATE_DECK_SCORES = 'CREATE_DECK_SCORES';
export const ADD_QUESTION_SCORE = 'ADD_QUESTION_SCORE';
export const INIT_ACTIVE_DECK = 'INIT_ACTIVE_DECK';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export function createDeckScores(deckId) {
  return {
    type: CREATE_DECK_SCORES,
    deckId
  };
}

export function addQuestionScore(deckId, cid, isCorrect) {
  return {
    type: ADD_QUESTION_SCORE,
    deckId,
    cid,
    isCorrect: shouldBeChecked
  };
}

export function initActiveDeck(cards, deck) {

  const activeDeck = {};
  activeDeck.cards = cards;
  activeDeck.answers = {};
  //TODO make more readable - convert to for loop for performance
  cards.forEach(card => activeDeck.answers[card.id] = Object.assign({}, card.options.map((o) => ({
    isChecked: false,
    shouldBeChecked: o.isCorrect
  }))));

  return {
    type: INIT_ACTIVE_DECK,
    activeDeck
  };
}

export function toggleCheckBox(cardId, checkBoxIndex) {

  return {
    type: TOGGLE_CHECKBOX,
    cardId,
    checkBoxIndex

  };

}