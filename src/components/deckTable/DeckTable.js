import React, { useEffect } from 'react'
import styled from 'styled-components/macro'

import { useGameState } from '../../gameState/gameStateProvider'
import { SurvivorPlayfield } from './SurvivorPlayfield'
import { AlienPlayfield } from './AlienPlayfield'
import { Shop } from './Shop'
import { survivorCards, alienCards } from '../cards'
import { shuffle } from '../../utils'
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
          Array(copies).fill().forEach(() => factionCardBucket.push(factionCards[card]))
        }
      }

      addCards(survivorCards, survivorStartingCards)
      addCards(alienCards, alienStartingCards)
      shuffle(survivorStartingCards)
      shuffle(alienStartingCards)

      dispatch({
        type: 'CREATE_STARTING_DECK',
        startingDecks: { survivors: survivorStartingCards,  aliens: alienStartingCards }
      })
    }

    createStartingDeck()
  }, [dispatch])

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
