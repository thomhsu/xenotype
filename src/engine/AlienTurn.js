/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { useGameState } from '../gameState/gameStateProvider'
import { resetAP, drawOne } from './'
import { loopDelay } from '../utils'

let drawn = 0

export default function App() {
  const [ state, dispatch ] = useGameState()

  useEffect(() => {
    drawn = 0
    resetAP(dispatch, 'aliens', 4)
  }, [])

  useEffect(() => {
    if (drawn < 5) {
      drawn++
      setTimeout(() => {
        drawOne(state, dispatch, 'aliens')
      }, 500)
    }
  }, [state.playerDeck])

  return null
}


// Disable clicks on survivor side
// Reset AP to 4
// Draw 5 cards
// If deck is depleted, shuffle in discard pile and continue
// Action phase:
// Can play a card from their hand
// Reduce resources
// Resolve effects
// Can shop for AP
// Buy as much stuff as they can afford
// Reduce resources and add to discard
// Discard hand
// End turn button can end turn at any time
// Set turn to Survivors
