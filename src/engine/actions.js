import { survivorCards, alienCards } from '../components/cards'
import { shuffle } from '../utils'

export const createStartingDeck = (dispatch) => {
  const survivorStartingCards = []
  const alienStartingCards = []

  function addCards(factionCards, factionCardBucket) {
    for (let card in factionCards) {
      const copies = factionCards[card].baseQty
      Array(copies).fill().forEach(() => factionCardBucket.push(factionCards[card]))
    }
  }

  addCards(survivorCards, survivorStartingCards)
  addCards(alienCards, alienStartingCards)
  shuffle(survivorStartingCards)
  shuffle(alienStartingCards)

  dispatch({
    type: 'CREATE_STARTING_DECK',
    startingDecks: { survivors: survivorStartingCards,  aliens: alienStartingCards }
  })
}

export const setPlayer = (dispatch, faction) => {
  dispatch({
    type: 'SET_PLAYER',
    currentPlayer: faction
  })
}

export const resetAP = (dispatch, faction, amount) => {
  dispatch({ type: 'RESET_AP', faction, amount })
}

export const drawOne = (state, dispatch, faction) => {
  if (!state.playerDeck[faction].length) {
    const discardPile = state.playerDiscard[faction]
    shuffle(discardPile)
    
  }
}