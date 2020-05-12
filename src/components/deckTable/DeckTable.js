import React, { useEffect } from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import PlayerDeck from './PlayerDeck'
import ShipDeck from './ShipDeck'
import { survivorCards, alienCards } from '../cards'
import { color } from '../../styles/styleVariables'

export default function DeckTable() {
  const [state, dispatch] = useGameState()

  useEffect(() => {
    function createStartingDeck() {
      const survivorStartingCards = []
      const alienStartingCards = []

      function addCards(factionCards, factionCardBucket) {
        for (let card in factionCards) {
          const copies = factionCards[card].baseQty
          for (let i = 0; i < copies; i++) {
            factionCardBucket.push(factionCards[card])
          }
        }
      }

      addCards(survivorCards, survivorStartingCards)
      addCards(alienCards, alienStartingCards)

      dispatch({
        type: 'CREATE_STARTING_DECK',
        startingDecks: { survivors: survivorStartingCards,  aliens: alienStartingCards }
      })
    }

    createStartingDeck()
  }, [dispatch])

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

