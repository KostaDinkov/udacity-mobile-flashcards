export const INIT_ACTIVE_DECK = 'INIT_ACTIVE_DECK';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const SET_ANSWER_CORRECT = 'SET_ANSWER_CORRECT';

export function initActiveDeck(cards, deck) {
  const activeDeck = {};
  activeDeck.cards = cards;
  activeDeck.answers = {};
  activeDeck.deckName=deck.name;
  //TODO make more readable - convert to for loop for performance
  cards.forEach(card => activeDeck.answers[card.id] = Object.assign({}, card.options.map((o) => ({
    isChecked: false,
    shouldBeChecked: o.answer
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

export function setAnswerToCorrect(cardId){
  return {
    type:SET_ANSWER_CORRECT,
    cardId
  }
}