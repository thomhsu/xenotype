import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { color } from '../../styles/styleVariables'

export default function ShipDeck() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      Ship
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 100%;
  border: 1px solid black;
  background-color: white;
  padding: 1rem;
`
