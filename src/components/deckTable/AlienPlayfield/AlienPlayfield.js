import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../../gameState/gameStateProvider'
import ResourceTracker from '../ResourceTracker'
import PlayerHand from '../PlayerHand'
import { color } from '../../../styles/styleVariables'

export default function AlienPlayfield() {
  const [state, dispatch] = useGameState()

  return (
    <Container activeTurn={state.currentPlayer === 'aliens'} >
      <h2>Aliens</h2>
      <ResourceTracker player={'aliens'} />
      <PlayerHand player={'aliens'} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: ${props => props.activeTurn ? '1' : '0.3'};
  background-color: ${props => props.activeTurn ? 'honeydew' : 'slategrey'};
  padding: 1rem;
`
