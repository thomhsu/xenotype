export const initialGameState = {
  currentPlayer: null,
  // currentPlayer: 'aliens',
  trackPosition: 10,
  playFieldItems: [],
  resources: {
    survivorScrap: 0,
    survivorAP: 0,
    alienBiomass: 0,
    alienAP: 3
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
    case 'START_GAME':
      return {...state, currentPlayer: action.currentPlayer}
    default:
      return state
  }
}
