import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import PlayerDeck from './PlayerDeck'
import ShipDeck from './ShipDeck'
import { color } from '../../styles/styleVariables'

export default function DeckTable() {
  const [state, dispatch] = useGameState()

  return (
    <Container>
      <PlayerDeck player='survivors' />
      <ShipDeck />
      <PlayerDeck player='aliens' />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

