import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { color } from '../../styles/styleVariables'

export default function PlayerDeck({ player }) {
  const [state, dispatch] = useGameState()

  return (
    <Container activeTurn={state.currentPlayer === player} >
      {player}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.activeTurn ? 'aliceblue' : 'white'};
  padding: 1rem;
`

