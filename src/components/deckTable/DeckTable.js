import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import SurvivorDeck from './SurvivorDeck'
import ShipDeck from './ShipDeck'
import AlienDeck from './AlienDeck'
import { color } from '../../styles/styleVariables'

export default function DeckTable() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      <SurvivorDeck />
      <ShipDeck />
      <AlienDeck />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100%;
`

