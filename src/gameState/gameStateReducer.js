export const initialGameState = {
  currentPlayer: null,
  // currentPlayer: 'survivors',
  trackPosition: 10,
  ap: {
    survivors: 0,
    aliens: 0
  },
  resources: {
    survivors: 0,
    aliens: 0
  },
  playerHand: {
    survivors: [],
    aliens: []
  },
  playerDeck: {
    survivors: [],
    aliens: []
  },
  playerDiscard: {
    survivors: [],
    aliens: []
  }
}

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_STARTING_DECK':
      return {...state, playerDeck: {...action.startingDecks} }
    case 'SET_PLAYER':
      return {...state, currentPlayer: action.currentPlayer}
    case 'RESET_AP':
      return {...state, ap: { ...state.ap, [action.faction]: action.amount }}
    case 'UPDATE_DISCARD':
      return {...state, playerDiscard: { ...state.playerDiscard, [action.faction]: action.newDiscard }}
    case 'UPDATE_DRAW':
      return {...state, playerDraw: { ...state.playerDraw, [action.faction]: action.newDraw }}
    case 'UPDATE_HAND':
      return {
        ...state,
        playerHand: {
          ...state.playerHand,
          [action.faction]: state.playerHand[action.faction].concat(action.newCard)
        }}
    default:
      return state
  }
}
