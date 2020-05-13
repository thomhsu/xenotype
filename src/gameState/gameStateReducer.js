export const initialGameState = {
  currentPlayer: null,
  // currentPlayer: 'survivors',
  trackPosition: 10,
  resources: {
    survivorScrap: 0,
    survivorAP: 0,
    alienBiomass: 0,
    alienAP: 0
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
    case 'RESET_ALIEN_AP':
      return {...state, resources: { ...state.resources, alienAP: 4 }}
    default:
      return state
  }
}
