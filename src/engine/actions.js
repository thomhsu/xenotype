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
  let drawnCard

  if (!state.playerDeck[faction].length) {
    const shuffledDiscard = shuffle([...state.playerDiscard[faction]])
    drawnCard = shuffledDiscard.pop()
    updateDiscard(dispatch, faction, [])
    updateDraw(dispatch, faction, shuffledDiscard)
    addToHand(dispatch, faction, drawnCard)
    return
  }

  const updatedDraw = [...state.playerDraw[faction]]
  drawnCard = updateDraw.pop()
  updateDraw(dispatch, faction, updatedDraw)
  addToHand(dispatch, faction, drawnCard)
}

const updateDiscard = (dispatch, faction, newDiscard) => {
  dispatch({ type: 'UPDATE_DISCARD', faction, newDiscard })
}

const updateDraw = (dispatch, faction, newDraw) => {
  dispatch({ type: 'UPDATE_DRAW', faction, newDraw })
}

const addToHand = (dispatch, faction, newCard) => {
  dispatch({ type: 'UPDATE_HAND', faction, newCard })
}
