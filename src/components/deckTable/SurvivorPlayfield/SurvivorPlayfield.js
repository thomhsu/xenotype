import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../../gameState/gameStateProvider'
import ResourceTracker from '../ResourceTracker'
import PlayerHand from '../PlayerHand'
import { Drawpile, Discardpile } from '../../cards'
import { PlayfieldContainer } from '../sharedStyles'
import { color } from '../../../styles/styleVariables'

export default function SurvivorPlayfield() {
  const [state, dispatch] = useGameState()

  return (
    <PlayfieldContainer activeTurn={state.currentPlayer === 'survivors'} >
      <div>
        <h2>Survivors</h2>
        <ResourceTracker player={'survivors'} />
      </div>
      {/* <PlayerHand player={'survivors'} /> */}
      <DrawDiscardContainer>
        <Drawpile player='survivors' />
        <Discardpile player='survivors' />
      </DrawDiscardContainer>
    </PlayfieldContainer>
  )
}

const DrawDiscardContainer = styled.div`
  display: flex;
`
