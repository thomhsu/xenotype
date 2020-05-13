import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../../gameState/gameStateProvider'
import ResourceTracker from '../ResourceTracker'
import PlayerHand from '../PlayerHand'
import { Drawpile, Discardpile } from '../../cards'
import { PlayfieldContainer } from '../sharedStyles'
import { color } from '../../../styles/styleVariables'

export default function AlienPlayfield() {
  const [state, dispatch] = useGameState()

  return (
    <PlayfieldContainer activeTurn={state.currentPlayer === 'aliens'} >
      <div>
        <h2>Aliens</h2>
        <ResourceTracker player='aliens' />
      </div>
      {/* <PlayerHand player='aliens' /> */}
      <DrawDiscardContainer>
        <Discardpile player='aliens' />
        <Drawpile player='aliens' />
      </DrawDiscardContainer>
    </PlayfieldContainer>
  )
}

const DrawDiscardContainer = styled.div`
  display: flex;
`