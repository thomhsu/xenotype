import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { color } from '../../styles/styleVariables'

export default function AlienDeck() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      Alien
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: white;
  padding: 1rem;
`
