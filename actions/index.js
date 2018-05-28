export const CREATE_DECK_SCORES = 'CREATE_DECK_SCORES';
export const ADD_QUESTION_SCORE = 'ADD_QUESTION_SCORE';
export const INIT_ACTIVE_DECK = 'INIT_ACTIVE_DECK';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
import React from 'react'
export function createDeckScores(deckId){
  return{
    type:CREATE_DECK_SCORES,
    deckId
  }
}

export function addQuestionScore(deckId,cid,isCorrect){
  return {
    type:ADD_QUESTION_SCORE,
    deckId,
    cid,
    isCorrect
  }
}

export function initActiveDeck(cards){

  const activeDeck = {};
  cards.forEach(card=>activeDeck[card.id]=Object.assign({},card.options.map(()=>false)));
  return{
    type:INIT_ACTIVE_DECK,
    activeDeck,
  }
}

export function toggleCheckBox(cardId, checkBoxIndex){

  return{
    type:TOGGLE_CHECKBOX,
    cardId,
    checkBoxIndex

  }

}