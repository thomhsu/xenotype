import React from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { Card, survivorCards, alienCards } from '../cards'
import { color } from '../../styles/styleVariables'

export default function PlayerDeck({ player }) {
  const [state, dispatch] = useGameState()

  const hand = player === 'survivors' ? survivorCards : alienCards

  return (
    <Container>
      {
        hand.map((card, i) => {
          return (
            <Card card={card} key={card.name + i} />
          )
        })
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
`

