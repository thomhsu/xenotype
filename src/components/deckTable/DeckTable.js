import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { SurvivorPlayfield } from './SurvivorPlayfield'
import { AlienPlayfield } from './AlienPlayfield'
import { Shop } from './Shop'
import { color } from '../../styles/styleVariables'

export default function DeckTable() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      <SurvivorPlayfield />
      <Shop />
      <AlienPlayfield />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
