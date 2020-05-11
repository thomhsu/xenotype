import React, { useReducer, useContext } from 'react'

import { initialGameState, gameStateReducer } from './gameStateReducer'

const GameStateContext = React.createContext()

export const GameStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameStateReducer, initialGameState)

  return (
    <GameStateContext.Provider value={[state, dispatch]}>
        {children}
    </GameStateContext.Provider>
  )
}

export const useGameState = () => {
  const gameState = useContext(GameStateContext)

  if(!gameState) {
    throw new Error('Unable to use useGameState outside of a GameStateProvider')
  }
  
  return gameState
}
