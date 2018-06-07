import {INIT_ACTIVE_DECK, SET_ANSWER_CORRECT, TOGGLE_CHECKBOX} from './actionTypes';

export function initActiveDeck(cards, deck, isQuizMode) {

  const activeDeck = {};
  activeDeck.cards = cards;
  activeDeck.isQuizMode = isQuizMode;
  activeDeck.answers = {};
  activeDeck.deck=deck;
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