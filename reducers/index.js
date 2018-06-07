import React from 'react';
import {combineReducers} from 'redux';
import decks from './decks';
import cards from './cards';
import activeDeck from'./activeDeck'

export default combineReducers({ decks, cards, activeDeck });