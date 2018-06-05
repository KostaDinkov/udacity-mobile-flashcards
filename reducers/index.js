import React from 'react';
import {combineReducers} from 'redux';

import {ADD_QUESTION_SCORE, CREATE_DECK_SCORES} from '../actions/activeDeck';
import decks from './decks';
import cards from './cards';
import activeDeck from'./activeDeck'

export default combineReducers({ decks, cards, activeDeck });